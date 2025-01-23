import { Link, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import { containerTitle } from "../mock";

const SeachContainer = ({ searchLocation, convertLocation }) => {
  const location = useLocation();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTitle = containerTitle?.[location?.pathname];

  const urls = ["/", "/youtube-to-mp3/", "/youtube-to-mp4/"];

  useEffect(() => {
    if (
      (!!searchLocation?.state?.message || !!convertLocation?.state?.message) &&
      (location?.pathname === "/search/" || location?.pathname === "/convert/")
    ) {
      setSearchText(searchLocation?.state?.message);
      getSuggestion(searchLocation?.state?.message || convertLocation?.state?.message);
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

  return (
    <>
      <div className="search">
        <div className="main_search">
          <h1>{getTitle?.[0]?.title}</h1>
          <p>{getTitle?.[0]?.desc}</p>
          <div className="search_box">
            <form
              className="main_seacrh_box"
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/search/", {
                  state: { message: searchText },
                });
              }}
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
      {location?.pathname === "/search/" ? (
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
              ))}
            </div>
          )}
        </div>
      ) : null}
      {location?.pathname === "/convert/" ? (
        <div className="result second_section">
          <div class="down_wrap">
            <iframe
              id="widgetPlusApi"
              src={`https://ac.insvid.com/widget?url=https://www.youtube.com/watch?v=${convertLocation?.state?.message}`}
              width="100%"
              height="100%"
              allowTransparency="true"
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
        </div>
      ) : null}
    </>
  );
};

export default SeachContainer;
