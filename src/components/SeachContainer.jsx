import { Link, navigate } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "@reach/router";
import { useTranslation } from "react-i18next";
import {
  blockedIds,
  convertPath,
  homePath,
  mp3Path,
  mp4Path,
  searchPath,
} from "../constant";

const convertTimeToSeconds = (timeStr) => {
  const timeParts = timeStr?.split?.(":");
  let totalSeconds = 0;

  if (timeParts?.length === 3) {
    const hours = parseInt(timeParts?.[0], 10);
    const minutes = parseInt(timeParts?.[1], 10);
    totalSeconds = parseInt(timeParts?.[2], 10);
    totalSeconds += hours * 3600 + minutes * 60;
  } else if (timeParts?.length === 2) {
    const minutes = parseInt(timeParts?.[0], 10);
    totalSeconds = parseInt(timeParts?.[1], 10);
    totalSeconds += minutes * 60;
  } else {
    console.log("Invalid time format. Use HH:MM:SS or MM:SS");
    return;
  }

  return totalSeconds;
};

const SeachContainer = ({ convertLocation }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const suggestionBoxRef = useRef(null);

  const containerTitle = t(`containerTitle.${location?.pathname}`, {
    returnObjects: true,
  });

  const urls = [homePath, mp3Path, mp4Path];

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const searchTxt = query?.get?.("q");

  useEffect(() => {
    if (!!searchTxt && location?.pathname === `${searchPath}/`) {
      setSearchText(searchTxt);
      getSuggestion(searchTxt);
      window.history.replaceState({}, document.title);
    }
  }, [searchTxt, location?.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionBoxRef.current &&
        !suggestionBoxRef.current.contains?.(event?.target)
      ) {
        setSuggestions([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const callbackName = "handleData";
    window[callbackName] = (data) => {
      setSuggestions(data?.[1]);
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
        setSearchText(suggestions?.[activeIndex + 1]);
      } else if (e.key === "ArrowUp") {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? suggestions?.length - 1 : prevIndex - 1
        );
        setSearchText(suggestions?.[activeIndex - 1]);
      } else if (e.key === "Enter" && activeIndex >= 0) {
        handleSuggestionClick(suggestions?.[activeIndex]);
      }
    }
  };

  const handleSuggestionClick = async (suggestion) => {
    setSearchText(suggestion);
    setSuggestions([]);

    if (location?.pathname === `${searchPath}/`) {
      getSuggestion(suggestion);
    }
    if (
      urls?.includes(location?.pathname) ||
      location?.pathname === `${convertPath}/`
    ) {
      navigate(`${searchPath}/`, {
        state: { message: suggestion },
      });
    }
  };
  const handleConvert = (contentData) => {
    navigate(`${convertPath}/`, {
      state: {
        message: { id: contentData?.id, duration: contentData?.duration },
      },
    });
  };

  return (
    <>
      <div className="banner-box-content">
        <div className="banner-box">
          <h1>{containerTitle?.title}</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`${searchPath}/?q=${encodeURIComponent(searchText)}`);
              setSuggestions([]);
            }}
          >
            <div className="search-box">
              <div className="search-wrap">
                <input
                  type="text"
                  name="url"
                  id="url"
                  autoComplete="off"
                  placeholder={t("search.placeholder")}
                  value={searchText}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  required
                />
              </div>
              <button
                name="form_submit"
                id="form_submit"
                type="submit"
                className="primary-btn"
              >
                {t("search.startButton")}
              </button>
              {suggestions.length > 0 ? (
                <div
                  id="suggestion_box"
                  ref={suggestionBoxRef}
                  style={{ display: suggestions.length > 0 ? "block" : "none" }}
                >
                  <ul id="suggestions">
                    {suggestions?.map?.((term, index) => (
                      <li
                        key={index}
                        className={`search_result ${
                          index === activeIndex ? "active" : ""
                        }`}
                        style={{
                          cursor: "pointer",
                          backgroundColor:
                            index === activeIndex ? "#f0f0f0" : "#fff",
                        }}
                        onClick={() => {
                          setSearchText(term);
                          setSuggestions([]);
                          document.getElementById("form_submit").click();
                        }}
                      >
                        {term}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </form>
          <span>
            {t("search.terms")}
            <Link to="#"> {t("search.termsLink")}</Link>
          </span>
        </div>
      </div>

      {location?.pathname === `${searchPath}/` ? (
        <div className="result">
          {loading ? (
            <div className="spinner" id="loader">
              {Array.from({ length: 4 })?.map((_, index) => {
                return <div className={`box-${index + 1}`} key={index}></div>;
              })}
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
                      boxShadow: "0 2px 4px rgba(172, 43, 43, 0.1)",
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
                  {t("notFound")}
                </div>
              )}
            </div>
          )}
        </div>
      ) : null}

      {location?.pathname === `${convertPath}/` ? (
        <div className="result mt-48">
          {!convertLocation?.state?.message?.id ? (
            <div className="spinner" id="loader">
              {Array.from({ length: 4 })?.map((_, index) => {
                return <div className={`box-${index + 1}`} key={index}></div>;
              })}
            </div>
          ) : (
            <div className="data_results mt-48">
              {blockedIds?.includes?.(convertLocation?.state?.message?.id) ? (
                <div className="blocked_error bloacked_id_error warning">
                  <h3>Sorry</h3>
                  <h3>
                    At the request of the copyright owner, this video cannot be
                    downloaded.
                  </h3>
                </div>
              ) : !blockedIds?.includes?.(
                  convertLocation?.state?.message?.id
                ) ? (
                <div className="down_wrap">
                  <iframe
                    title="yt-meta"
                    id="widgetPlusApi"
                    src={`https://ac.insvid.com/widget?url=https://www.youtube.com/watch?v=${
                      convertLocation?.state?.message?.id
                    }&el=${convertTimeToSeconds(
                      convertLocation?.state?.message?.duration
                    )}`}
                    width="100%"
                    height="100%"
                    allowtransparency="true"
                    scrolling="no"
                    style={{ border: "none" }}
                  ></iframe>
                  <div className="btn-group">
                    <Link
                      target="_blank"
                      to="https://ak.iptogreg.net/4/7733548"
                      className="btn-download"
                    >
                      {t("downloadNow")}
                    </Link>
                    <div>
                      <Link
                        target="_blank"
                        to="https://ak.iptogreg.net/4/7733548"
                        className="btn-playnow"
                      >
                        {t("playNow")}
                      </Link>
                      <span>Advertising</span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default SeachContainer;
