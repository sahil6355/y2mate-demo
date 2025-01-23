import React from "react";
import { features, homeFaqs } from "../mock";
import SeachContainer from "./SeachContainer";

const Home = () => {
  return (
    <>
      <div className="container">
        <SeachContainer />
        <div className="contain">
          <h2 className="text-center">Download YouTube Video For Free</h2>
          <p>
            Y2Meta is one of the best YouTube downloader tools, providing
            high-quality video downloads for free at fast speeds. Millions of
            people use it regularly to save YouTube videos in various formats,
            including MP4, MOV, WMV, WebM, 3GP, FLV, MO, and more. Y2Meta works
            seamlessly across all devices, including mobile phones, tablets,
            desktops, and more. It stands out among other video downloader tools
            due to its fast download speeds and support for multiple video (MP4)
            and audio (MP3) formats compatible with all devices. For
            high-quality YouTube video downloads, Y2Meta ranks first, offering
            video quality options from 320p up to 4K. Y2Meta is cross-platform
            compatible and can be accessed on any OS like Android, iOS, macOS,
            Windows, Linux, and more. Y2Meta works like a search engine,
            allowing you to search for the YouTube video you want to download
            directly.
          </p>
          <h2 className="text-center mt-48">
            How to Download YouTube Video Using Y2Meta?
          </h2>
          <p>
            Downloading videos using Y2Meta is very straightforward. Simply
            follow the steps below to use it offline:{" "}
          </p>
          <ol>
            <li>Search for Y2Meta in your browser and click on y2meta.lol.</li>
            <li>
              Copy and paste the YouTube video URL into the search box, or
              simply search for the video title you are looking for.
            </li>
            <li>
              Click on the “Start” button, choose your desired video quality,
              and hit the “Download” button to save it on your device.
            </li>
          </ol>
          <h2 className="text-center mt-48">YouTube Downloader Features</h2>
          <div className="box">
            {features.map((feature, index) => (
              <div className="sub-box" key={index}>
                <div className={`img ${feature.imgClass}`}></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          <h2 className="text-center mt-48 mb-20">Y2Meta Questions</h2>
          {homeFaqs.map((faq, index) => (
            <div className="faq" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
