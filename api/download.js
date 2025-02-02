import ytdl from 'ytdl-core';
import puppeteer from 'puppeteer';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, message: 'Only GET method is allowed' });
    }

    const videoUrl = req.query.url;
    const format = req.query.format || 'mp4';
    let quality = req.query.quality || (format === 'mp4' ? 'highestvideo' : 'highestaudio');

    if (!videoUrl || !ytdl.validateURL(videoUrl)) {
        return res.status(400).json({ success: false, message: 'Invalid YouTube URL' });
    }

    const allowedQualities = {
        mp3: ["highestaudio", "lowestaudio", "320kbps", "256kbps", "192kbps", "128kbps"],
        mp4: ["highestvideo", "lowestvideo", "1080p", "720p", "480p", "360p", "240p", "144p"]
    };

    if (!['mp3', 'mp4'].includes(format)) {
        return res.status(400).json({ success: false, message: 'Invalid format, choose mp3 or mp4' });
    }

    if (!allowedQualities[format].includes(quality)) {
        return res.status(400).json({
            success: false,
            message: `Invalid quality for ${format}. Allowed: ${allowedQualities[format].join(', ')}`
        });
    }

    try {
        // **Use Puppeteer to bypass YouTube bot detection**
        const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        const page = await browser.newPage();
        await page.goto(videoUrl, { waitUntil: 'networkidle2' });

        const videoTitle = await page.title();
        await browser.close();

        res.setHeader('Content-Disposition', `attachment; filename="${videoTitle}.${format}"`);

        if (format === 'mp4') {
            const stream = ytdl(videoUrl, { quality: quality });
            res.setHeader('Content-Type', 'video/mp4');
            stream.pipe(res);
        } else if (format === 'mp3') {
            const stream = ytdl(videoUrl, { filter: 'audioonly', quality: 'highestaudio' });
            res.setHeader('Content-Type', 'audio/mpeg');
            stream.pipe(res);
        }

    } catch (error) {
        console.error('Error:', error);
        if (error.message.includes('UnrecoverableError')) {
            return res.status(400).json({ success: false, message: 'YouTube detected bot activity. Try again later.' });
        }
        res.status(500).json({ success: false, message: 'Failed to process the video download.' });
    }
}
