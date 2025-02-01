const ytdl = require('ytdl-core');
const cors = require('cors');
const fs = require('fs');

const cookies = fs.readFileSync('cookies.txt', 'utf8');
const allowedQualities = {
  mp3: ["highestaudio", "lowestaudio", "320kbps", "256kbps", "192kbps", "128kbps"],
  mp4: ["highestvideo", "lowestvideo", "1080p", "720p", "480p", "360p", "240p", "144p"]
};

module.exports = async (req, res) => {
  cors()(req, res, async () => {
    const videoUrl = req.query.url;
    const format = req.query.format || 'mp4';
    let quality = req.query.quality || (format === 'mp4' ? 'highestvideo' : 'highestaudio');

    if (!videoUrl || !ytdl.validateURL(videoUrl)) {
      return res.status(400).send('Invalid YouTube URL');
    }

    if (!['mp3', 'mp4'].includes(format)) {
      return res.status(400).send('Invalid format, choose mp3 or mp4');
    }

    if (!allowedQualities[format].includes(quality)) {
      return res.status(400).send(`Invalid quality for ${format}. Allowed values: ${allowedQualities[format].join(', ')}`);
    }

    try {
      const info = await ytdl.getInfo(videoUrl);
      res.header('Content-Disposition', `attachment; filename="download.${format}"`);

      if (format === 'mp4') {
        let availableFormats = ytdl.filterFormats(info.formats, f => f.container === 'mp4' && f.hasVideo && f.hasAudio);
        let selectedFormat = availableFormats.find(f => f.qualityLabel === quality);

        if (!selectedFormat) {
          const availableQualities = [...new Set(availableFormats.map(f => f.qualityLabel))].join(', ');
          return res.status(400).json({
            success: false,
            message: `Requested quality ${quality} not available. Available: ${availableQualities}`
          });
        }

        res.header('Content-Disposition', `attachment; filename="video-${quality}.mp4"`);
        ytdl(videoUrl, { quality: selectedFormat.itag }).pipe(res);
      } else if (format === 'mp3') {
        const audioFormats = ytdl.filterFormats(info.formats, f => f.mimeType.includes('audio'));
        audioFormats.sort((a, b) => b.bitrate - a.bitrate);

        let selectedFormat;
        if (quality === "320kbps") {
          selectedFormat = audioFormats.find(f => f.bitrate >= 256000) || audioFormats[0];
        } else if (quality === "256kbps") {
          selectedFormat = audioFormats.find(f => f.bitrate >= 192000 && f.bitrate < 256000) || audioFormats[0];
        } else if (quality === "192kbps") {
          selectedFormat = audioFormats.find(f => f.bitrate >= 128000 && f.bitrate < 192000) || audioFormats[0];
        } else if (quality === "128kbps") {
          selectedFormat = audioFormats.find(f => f.bitrate < 128000) || audioFormats[audioFormats.length - 1];
        } else if (quality === "highestaudio") {
          selectedFormat = audioFormats[0];
        } else {
          selectedFormat = audioFormats[audioFormats.length - 1];
        }

        if (!selectedFormat) {
          return res.status(400).send(`Requested audio quality ${quality} not available.`);
        }
        const options = {
          quality: selectedFormat.itag,
          requestOptions: {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
              'Cookie': cookies
            }
          }
        };

        ytdl(videoUrl, options).pipe(res);
      }

    } catch (error) {
      if (error.message.includes('UnrecoverableError')) {
        return res.status(400).json({
          success: false,
          message: 'Failed to process the video download due to bot detection. Please try again later.'
        });
      }
      console.error('Error:', error);
      res.status(500).send('Failed to process the video download');
    }
  });
};
