import React from "react";
import { mp3FaqData, mp3Features } from "../mock";
import SeachContainer from "./SeachContainer";

const YoutubeToMp3 = () => {
  return (
    <div className="container">
      <SeachContainer />
      <div className="contain">
        <h2 className="text-center">Download YouTube Videos to MP3 Online</h2>
        <p>
          Many people use YouTube to listen to their favorite music. However,
          YouTube doesn’t allow downloading videos directly as MP3 files for
          offline use. Y2Meta solves this issue with its fast YouTube to MP3
          converter tool, letting you convert and download YouTube videos into
          MP3 files for free and with ease. No registration or login is required
          to use this tool. Y2Meta works seamlessly on all devices, including
          mobile phones, tablets, and desktops. The best part is Y2Meta MP3
          converter doesn’t require any third-party software or mobile app to
          convert YouTube videos.
        </p>
        <p>
          Y2Meta lets you download YouTube videos in various formats, including
          MP3, MP4, WEBM, 3GP, MOV, and more. Additionally, when converting
          YouTube videos to MP3, you can select the audio quality from options
          like 320kbps, 256kbps, 192kbps, 128kbps, and 96kbps.
        </p>

        <h2 className="text-center mt-48">How to Download MP3 from YouTube</h2>
        <p>
          Follow these simple steps to convert YouTube videos to MP3 quickly and
          securely:
        </p>
        <ol>
          <li>
            Search for “YouTube to MP3 Converter” in your web browser and click
            on the Y2Meta website.
          </li>
          <li>
            Go to YouTube.com, find the video you want to convert, and copy its
            URL.
          </li>
          <li>
            Paste the URL into the search box on the Y2Meta website and click on
            the “Convert” button.
          </li>
          <li>
            Select your desired quality, then hit the “Download” button to save
            your MP3 file.
          </li>
        </ol>
        <h2 className="text-center mt-48">YouTube To MP3 Converter Features</h2>
        <div className="box">
          {mp3Features.map((feature, index) => (
            <div className="sub-box" key={index}>
              <div className={`img ${feature.imageClass}`}></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <h2 className="text-center mt-48 mb-20">YouTube MP3 FAQs</h2>
        {mp3FaqData.map((faq, index) => (
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

export default YoutubeToMp3;
