import { Link, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import { useTranslation } from "react-i18next";

const SeachContainer = ({ searchLocation, convertLocation }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState("mp3");
  const [isLoadingForDwl, setIsLoadingForDwl] = useState(false);
  const [loadingQuality, setLoadingQuality] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const backendUrl = process.env.GATSBY_BACKEND_URL;
  
  const containerTitle = t(`containerTitle.${location?.pathname}`, {
    returnObjects: true,
  });

  const urls = ["/", "/youtube-to-mp3/", "/youtube-to-mp4/"];

  useEffect(() => {
    if (
      (!!searchLocation?.state?.message || !!convertLocation?.state?.message) &&
      (location?.pathname === "/search/" || location?.pathname === "/convert/")
    ) {
      setSearchText(searchLocation?.state?.message);
      getSuggestion(
        searchLocation?.state?.message || convertLocation?.state?.message
      );
      window.history.replaceState({}, document.title);
    }
  }, [
    searchLocation?.state?.message,
    location?.pathname,
    convertLocation?.state?.message,
  ]);

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
    setActiveIndex(-1);
  };

  const getSuggestion = async (suggestion) => {
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

  const handleKeyDown = (e) => {
    if (suggestions.length) {
      if (e.key === "ArrowDown") {
        setActiveIndex((prevIndex) => (prevIndex + 1) % suggestions?.length);
      } else if (e.key === "ArrowUp") {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? suggestions?.length - 1 : prevIndex - 1
        );
      } else if (e.key === "Enter" && activeIndex >= 0) {
        handleSuggestionClick(suggestions?.[activeIndex]);
      }
    }
  };

  const handleSuggestionClick = async (suggestion) => {
    setSearchText(suggestion);
    setSuggestions([]);

    if (location?.pathname === "/search/") {
      getSuggestion(suggestion);
    }
    if (
      urls?.includes(location?.pathname) ||
      location?.pathname === "/convert/"
    ) {
      navigate("/search/", {
        state: { message: suggestion },
      });
    }
  };
  const handleConvert = (contentData) => {
    navigate("/convert/", {
      state: { message: contentData?.id },
    });
  };

  const handleDownload = async (format, quality) => {
    const url = `https://www.youtube.com/watch?v=${convertLocation?.state?.message}`;
    if (!url) {
      alert("Please enter a valid YouTube URL");
      return;
    }
    setIsLoadingForDwl(true);
    setLoadingQuality(quality);

    try {
      const downloadUrl = `/api/download?url=${encodeURIComponent(
        url
      )}&format=${format}&quality=${quality}`;
      const response = await fetch(downloadUrl);

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Error downloading the video");
        setTimeout(() => setErrorMessage(""), 10000);
        return;
      }

      const fileBlob = await response.blob();
      const fileURL = URL.createObjectURL(fileBlob);
      const a = document.createElement("a");
      a.href = fileURL;
      a.download =
        format === "mp3"
          ? `${searchResults?.[0]?.title}.mp3`
          : `${searchResults?.[0]?.title}.mp4`;
      a.click();
    } catch (error) {
      setErrorMessage("Failed to download the video");
      setTimeout(() => setErrorMessage(""), 10000);
    } finally {
      setIsLoadingForDwl(false);
      setLoadingQuality("");
    }
  };
  return (
    <>
      <div className="search">
        <div className="main_search">
          <h1>{containerTitle?.title}</h1>
          <p>{containerTitle?.desc}</p>
          <div className="search_box">
            <form
              className="main_seacrh_box"
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/search/", {
                  state: { message: searchText },
                });
                setSuggestions([]);
              }}
            >
              <div className="img search-icon"></div>
              <input
                type="text"
                name="url"
                id="url"
                autoComplete="off"
                placeholder={t("search.placeholder")}
                value={searchText}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <button className="submit" id="submit-btn">
                {t("search.startButton")}
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
                backgroundColor: index === activeIndex ? "#f0f0f0" : "#fff",
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
            {t("search.terms")}{" "}
            <Link to="/" aria-label="terms and conditions">
              {t("search.termsLink")}
            </Link>
          </p>
        </div>
      </div>

      {location?.pathname === "/search/" ? (
        <div className="result">
          {loading ? (
            <div className="spinner" id="loader">
              <div className="box-1"></div>
              <div className="box-2"></div>
              <div className="box-3"></div>
              <div className="box-4"></div>
            </div>
          ) : (
            <div
              className="data_results"
              style={{
                display: "grid",
                gridTemplateColumns: searchResults?.length
                  ? "repeat(3, 1fr)"
                  : "none",
                gap: "16px",
                paddingTop: "16px",
                justifyContent: searchResults?.length ? "start" : "center",
                alignItems: searchResults?.length ? "start" : "center",
                minHeight: "150px",
              }}
            >
              {searchResults?.length ? (
                searchResults?.map?.((result, index) => (
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
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      handleConvert(result);
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
                ))
              ) : (
                <div
                  className="not-found"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                    textAlign: "center",
                    color: "#999",
                    fontSize: "18px",
                  }}
                >
                  Not found
                </div>
              )}
            </div>
          )}
        </div>
      ) : null}

      {location?.pathname === "/convert/" && convertLocation?.state?.message ? (
        <div className="result second_section">
          <div className="down_wrap">
            {errorMessage ? (
              <div className="error-message">{errorMessage}</div>
            ) : null}
            <h2>Video Download</h2>
            <div className="main_data">
              <ul className="tabs">
                <li
                  className={`tab-link MP3 ${
                    activeTab === "mp3" ? "current" : ""
                  }`}
                  onClick={() => setActiveTab("mp3")}
                >
                  <span>MP3</span>
                </li>
                <li
                  className={`tab-link MP4 ${
                    activeTab === "mp4" ? "current" : ""
                  }`}
                  onClick={() => setActiveTab("mp4")}
                >
                  <span>MP4</span>
                </li>
              </ul>
              <div className="inside_data">
                {/* MP3 Section */}
                {activeTab === "mp3" && (
                  <div id="mp3" className="tab-content current formatMP3">
                    <table>
                      <thead>
                        <tr>
                          <th>QUALITY</th>
                          <th>FORMAT</th>
                          <th className="fsize" style={{ display: "none" }}>
                            SIZE
                          </th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {["320kbps", "256kbps", "192kbps", "128kbps"].map(
                          (quality) => (
                            <tr key={quality}>
                              <th>
                                <p>{quality}</p>
                              </th>
                              <td>MP3</td>
                              <td
                                className="fsize fsize2"
                                style={{ display: "none" }}
                              ></td>
                              <td>
                                <div className="convert_btn">
                                  <div
                                    className="convert_btn_img"
                                    onClick={() => {
                                      handleDownload("mp3", quality);
                                    }}
                                  >
                                    {isLoadingForDwl &&
                                    loadingQuality === quality
                                      ? "Processing..."
                                      : "Download"}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* MP4 Section */}
                {activeTab === "mp4" && (
                  <div id="mp4" className="tab-content formatMP4">
                    <table>
                      <thead>
                        <tr>
                          <th>QUALITY</th>
                          <th>FORMAT</th>
                          <th className="fsize" style={{ display: "none" }}>
                            SIZE
                          </th>
                          <th>ACTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {["1080p", "720p", "480p", "360p", "240p", "144p"].map(
                          (quality, index) => (
                            <tr key={index}>
                              <th>
                                <p>{quality}</p>
                              </th>
                              <td>MP4</td>
                              <td
                                className="fsize fsize2"
                                style={{ display: "none" }}
                              ></td>
                              <td>
                                <div
                                  className="convert_btn"
                                  data-id={`convert_btn_${index}`}
                                >
                                  <div
                                    className="convert_btn_img"
                                    onClick={() => {
                                      handleDownload("mp4", quality);
                                    }}
                                  >
                                    {isLoadingForDwl &&
                                    loadingQuality === quality
                                      ? "Processing..."
                                      : "Download"}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SeachContainer;
