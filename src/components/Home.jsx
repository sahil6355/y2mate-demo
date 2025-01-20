import React, { useState } from "react";
import { features, homeFaqs } from "../mock";
import { Link } from "gatsby";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

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

    try {
      setLoading(true);
      const response = await fetch(
        `https://api.flvto.site/@api/search/YouTube/${encodeURIComponent(
          suggestion
        )}`
      );
      const data = await response.json();
      setLoading(false);
      setSearchResults(data?.items || []);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching search results:", error);
    }
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
        <div className="result">
          {loading ? (
            <div class="spinner" id="loader">
              <div class="box-1"></div>
              <div class="box-2"></div>
              <div class="box-3"></div>
              <div class="box-4"></div>
            </div>
          ) : (
            <div
              className="data_results"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                paddingTop: "16px",
              }}
            >
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="result-item"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    overflow: "hidden",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <img
                    src={result?.thumbMedium || result?.thumbDefault}
                    alt={result.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderBottom: "1px solid #ddd",
                    }}
                  />
                  <h3
                    style={{
                      padding: "8px",
                      fontSize: "16px",
                      color: "#333",
                    }}
                  >
                    {result?.title}
                  </h3>
                </div>
              ))}
            </div>
          )}
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

export default Home;
