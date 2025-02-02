import ytdl from 'ytdl-core';

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
        // Fake headers to bypass bot detection
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9',
            'Cookie': 'PREF=f4=4000000&f6=40000000&tz=Asia.Calcutta&f7=100; VISITOR_INFO1_LIVE=HqSRfL9DHm0; VISITOR_PRIVACY_METADATA=CgJJThIEGgAgRQ%3D%3D; __Secure-3PAPISID=sYlFP-8lwGBMvhqg/AmGqEh6zD2qY13tXT; __Secure-3PSID=g.a000swgWs4tAh03PFnA_K9RNU7-2SV6-MYzI0TAQlSNQXYZZzKBDCj5Wr193Z4fVNBZVJbxF7wACgYKAfkSARUSFQHGX2MiJZ818mxQySEiwk3IwGuPyBoVAUF8yKqBTZg0ZRS63K75lg_klNqu0076; LOGIN_INFO=AFmmF2swRQIgXq0Gf5dvfgYP9nSZgW8pou_KAWYFbuV8epFPxBTRjQUCIQCcyhnPZZC9a5pVzZtXkgDWXnny9o2c8NPA36NB4jFY0A:QUQ3MjNmeEFWb3d2TllrenJfV1loRFdhN3p1TlZRbndNV0Z0OTJwZkp4UzJIOWE0MzBNOW42cEloRUNfeF9ncUJ5YzBvWktFLUQzTEc4MTVoc1pyZDJDdlE3NVBIbnVwdHRDVzZERHQ4S3V3bHY3TEFOTmY0RzNTMFZZQlB0ekVDRXRqR2JJaXZPRkM1UkdrUDR1ay1pWkZBQVFIaWQxWFV3; YSC=AtTIHvsxWuc; __Secure-ROLLOUT_TOKEN=CNfct4_C2fa1YxDpl5K-_4iLAxiv9eLCoaSLAw%3D%3D; __Secure-1PSIDTS=sidts-CjIBmiPuTRnBFZrKN2zjiwKp6HnXgKgVSJNp-OHpMWkwvl8QT9ilrZTh6Rq5rA5j1-YTKRAA; __Secure-3PSIDTS=sidts-CjIBmiPuTRnBFZrKN2zjiwKp6HnXgKgVSJNp-OHpMWkwvl8QT9ilrZTh6Rq5rA5j1-YTKRAA; __Secure-3PSIDCC=AKEyXzV-2csrOVaiTwhU5BsJqlgaK_Ng-D_VQ7w8DJfO415zBC-G6ZXS5y72rEHxBiX-t3rNJg; ST-116peyq=gs_l=youtube.1.0.0i512k1l5j0i512i10k1j0i512i433i131i10k1j0i512k1l5j0i512i433i10k1j0i512k1.31080.51409.0.54534......0.178.575.0j4..........1j2.......10..35i39i362k1j0i433i131i741i328i362k1j0i741i328i362k1j0i433i741i328i362k1j0i433i131i328i362i637k1j0i3i328i362i637k1j0i433i131i229k1j0i512i433k1j0i512i433i131k1j0i512i433i131i650k1.173&oq=youtube.com&itct=CBQQ7VAiEwjZ2ObCoaSLAxW4mVYBHct8C1w%3D&csn=E9GAk9EZdpoX4ieU&session_logininfo=AFmmF2swRQIgXq0Gf5dvfgYP9nSZgW8pou_KAWYFbuV8epFPxBTRjQUCIQCcyhnPZZC9a5pVzZtXkgDWXnny9o2c8NPA36NB4jFY0A%3AQUQ3MjNmeEFWb3d2TllrenJfV1loRFdhN3p1TlZRbndNV0Z0OTJwZkp4UzJIOWE0MzBNOW42cEloRUNfeF9ncUJ5YzBvWktFLUQzTEc4MTVoc1pyZDJDdlE3NVBIbnVwdHRDVzZERHQ4S3V3bHY3TEFOTmY0RzNTMFZZQlB0ekVDRXRqR2JJaXZPRkM1UkdrUDR1ay1pWkZBQVFIaWQxWFV3&endpoint=%7B%22clickTrackingParams%22%3A%22CBQQ7VAiEwjZ2ObCoaSLAxW4mVYBHct8C1w%3D%22%2C%22commandMetadata%22%3A%7B%22webCommandMetadata%22%3A%7B%22url%22%3A%22%2Fresults%3Fsearch_query%3Dyoutube.com%22%2C%22webPageType%22%3A%22WEB_PAGE_TYPE_SEARCH%22%2C%22rootVe%22%3A4724%7D%7D%2C%22searchEndpoint%22%3A%7B%22query%22%3A%22youtube.com%22%7D%7D; ST-1k06sw0=session_logininfo=AFmmF2swRQIgXq0Gf5dvfgYP9nSZgW8pou_KAWYFbuV8epFPxBTRjQUCIQCcyhnPZZC9a5pVzZtXkgDWXnny9o2c8NPA36NB4jFY0A%3AQUQ3MjNmeEFWb3d2TllrenJfV1loRFdhN3p1TlZRbndNV0Z0OTJwZkp4UzJIOWE0MzBNOW42cEloRUNfeF9ncUJ5YzBvWktFLUQzTEc4MTVoc1pyZDJDdlE3NVBIbnVwdHRDVzZERHQ4S3V3bHY3TEFOTmY0RzNTMFZZQlB0ekVDRXRqR2JJaXZPRkM1UkdrUDR1ay1pWkZBQVFIaWQxWFV3'
        };

        const info = await ytdl.getInfo(videoUrl, { requestOptions: { headers } });

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
