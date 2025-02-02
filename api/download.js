import ytdl from 'ytdl-core';
import fs from 'fs';
import path from 'path';

// Delay function to introduce a pause between requests
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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
        // Load cookies from the file (make sure you have a valid cookies.txt file)
        const cookieFilePath = path.join(__dirname, 'cookie.txt');

        const cookies = fs.readFileSync(cookieFilePath, 'utf-8');

        // Fake headers to bypass bot detection
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9',
            'Cookie': cookies,  // Use the updated cookie format here
        };

        // Introduce a delay to avoid bot detection
        await delay(1000); // Delay for 1 second

        const info = await ytdl.getInfo(videoUrl, {
            requestOptions: { headers }
        });

        res.setHeader('Content-Disposition', `attachment; filename="download.${format}"`);

        if (format === 'mp4') {
            const stream = ytdl(videoUrl, { quality: quality, requestOptions: { headers } });
            res.setHeader('Content-Type', 'video/mp4');
            stream.pipe(res);
        } else if (format === 'mp3') {
            const stream = ytdl(videoUrl, { filter: 'audioonly', quality: 'highestaudio', requestOptions: { headers } });
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
