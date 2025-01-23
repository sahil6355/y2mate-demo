import React from "react";
import { mp4FaqData, mp4Features } from "../mock";
import SeachContainer from "./SeachContainer";

const YoutubeToMp4 = () => {
  return (
    <div className="container">
      <SeachContainer />
      <div className="contain">
        <h2 className="text-center">Best & Fast YouTube To MP4 Converter</h2>
        <p>
          Y2Meta provides a simple and user-friendly way to convert YouTube
          videos to MP4 format with just a few clicks. Our free YouTube to MP4
          converter supports a wide range of resolutions, including 144p, 240p,
          360p, 480p, 720p, 1080p, 1440p (2K), and up to 2160p (4K), allowing
          you to download videos in your preferred quality without any
          registration. Y2Meta also offers versatility in formats, letting you
          save videos as MP4, AVI, FLV, WebM, M4A, MOV, and 3GP. Fast, secure,
          and entirely free, Y2Meta makes it effortless to save YouTube videos
          directly to your device without any limitations. Plus, Y2Meta works
          seamlessly on any device whether you're using a mobile, tablet, or PC,
          and supports all major operating systems, including Windows, macOS,
          Linux, and more.
        </p>

        <h2 className="text-center mt-48">
          How to Easily Convert YouTube Videos to MP4 with Y2Meta
        </h2>
        <p>
          Want to save YouTube videos as MP4 files in just a few clicks? Y2Meta
          makes it quick, secure, and hassle-free. Follow these simple steps to
          convert and download your favorite YouTube videos in high-quality MP4
          files:
        </p>
        <ol>
          <li>
            Type "Best YouTube to MP4 Converter" into your browser and click on
            the Y2Meta website in the top search results.
          </li>
          <li>Head to YouTube, find the video you want, and copy its URL.</li>
          <li>
            Paste the URL into Y2Meta’s search box or search the video title or
            name in the search box like you do on YouTube, then click "Convert"
            to start the process.
          </li>
          <li>
            Choose your preferred video quality, whether it's 720p, 1080p, or
            even 4K, and hit the "Download" button to save your MP4 video file
            instantly.
          </li>
        </ol>
        <h2 className="text-center mt-48">YT to MP4 Converter Features</h2>
        <div className="box">
          {mp4Features.map((feature, index) => (
            <div className="sub-box" key={index}>
              <div className={`img ${feature.iconClass}`}></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <h2 className="text-center mt-48 mb-20">YouTube To MP4 FAQs</h2>
        {mp4FaqData.map((faq, index) => (
          <div className="faq" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            {faq.steps && (
              <ol>
                {faq.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeToMp4;
