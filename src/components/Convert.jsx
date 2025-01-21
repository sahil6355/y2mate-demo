import React, { useEffect, useState } from "react";
import { features, homeFaqs } from "../mock";
import { Link, navigate } from "gatsby";

const Convert = ({ location }) => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!!location?.state?.message) {
      // getDownLoadContent(location?.state?.message);
      window.history.replaceState({}, document.title);
    }
  }, [location?.state?.message]);

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const callbackName = "handleData";
    window[callbackName] = (data) => {
      setSuggestions(data[1]);
    };

    const script = document.createElement("script");
    script.src = `https://suggestqueries.google.com/complete/search?output=chrome&q=${encodeURIComponent(
      query
    )}&callback=${callbackName}`;
    document.body.appendChild(script);
    script.onload = () => {
      document.body.removeChild(script);
    };
    script.onerror = () => {
      setSuggestions([]);
      document.body.removeChild(script);
    };
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = async (suggestion) => {
    setSearchText(suggestion);
    setSuggestions([]);
    navigate("/search", {
      state: { message: suggestion },
    });
  };

  return (
    <>
      <div className="container">
        <div className="search">
          <div className="main_search">
            <h1>Y2Meta - YouTube Downloader</h1>
            <p>Download YouTube videos seamlessly in 1080p with Y2meta</p>
            <div className="search_box">
              <form
                className="main_seacrh_box"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="img search-icon"></div>
                <input
                  type="text"
                  name="url"
                  id="url"
                  autoComplete="off"
                  placeholder="Search or paste YouTube link here"
                  value={searchText}
                  onChange={handleInputChange}
                />
                <button className="submit" id="submit-btn">
                  Start
                </button>
              </form>
            </div>
            {suggestions?.map?.((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                  backgroundColor: "#fff",
                  color: "#333",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#fff")
                }
              >
                {suggestion}
              </div>
            ))}
            <p className="terms">
              By using our service you are accepting our{" "}
              <Link to="/" aria-label="terms and conditions">
                Term and Conditions.
              </Link>
            </p>
          </div>
        </div>
        <div class="down_wrap">
          <iframe
            id="widgetPlusApi"
            src={`https://ac.insvid.com/widget?url=https://www.youtube.com/watch?v=${location?.state?.message}`}
            width="100%"
            height="100%"
            allowTransparency="true"
            scrolling="no"
            style={{ border: "none" }}
            title="Video Widget"
          ></iframe>
          <div class="btn-group">
            <a
              target="_blank"
              href="https://ak.iptogreg.net/4/7733548"
              class="btn-download"
            >
              Download Now
            </a>
            <div>
              <a
                target="_blank"
                href="https://ak.iptogreg.net/4/7733548"
                class="btn-playnow"
              >
                Play Now
              </a>
              <span>Advertising</span>
            </div>
          </div>
        </div>
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

export default Convert;
