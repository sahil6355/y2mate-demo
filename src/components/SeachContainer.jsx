import React, { useEffect, useRef, useState } from "react";
import { navigate, Link as GatsbyLink } from "gatsby";
import { useTranslation } from "react-i18next";
import {
    blockedIds,
    convertPath,
    homePath,
    mp3Path,
    mp4Path,
    searchPath,
} from "../constant";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import Cookies from "js-cookie";

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
    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const suggestionBoxRef = useRef(null);
    const { originalPath } = useI18next();
    const hasRunRef = useRef(false);

    const containerTitle = t(`containerTitle.${originalPath}`, {
        returnObjects: true,
    });

    const urls = [homePath, mp3Path, mp4Path];

    const savedSuggestion = Cookies.get("search_suggestion");

    useEffect(() => {
        if (
            !!savedSuggestion &&
            originalPath === `${searchPath}/` &&
            !hasRunRef.current
        ) {
            hasRunRef.current = true;
            setSearchText(savedSuggestion);
            getSuggestion(savedSuggestion);
        }
    }, [savedSuggestion, originalPath]);

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
        console.log(suggestion);
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
            Cookies.remove("search_suggestion");
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

        Cookies.set("search_suggestion", suggestion, { expires: 0.01 }); // 15 minutes

        if (originalPath === `${searchPath}/`) {
            getSuggestion(suggestion);
        }
        if (urls?.includes(originalPath) || originalPath === `${convertPath}/`) {
            navigate(searchPath);
        }
    };
    const handleConvert = (contentData) => {
        Cookies.set(
            "convert_data",
            JSON.stringify({
                id: contentData?.id,
                duration: contentData?.duration,
            }),
            { expires: 0.01 } // 15 minutes
        );
        navigate(convertPath);
    };

    return (
        <>
            <div className="banner-box-content">
                <div className="banner-box">
                    <h1>{containerTitle?.title}</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            Cookies.set("search_suggestion", searchText, { expires: 0.01 });
                            hasRunRef.current = false;
                            navigate(searchPath);
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
                                                className={`search_result ${index === activeIndex ? "active" : ""
                                                    }`}
                                                style={{
                                                    cursor: "pointer",
                                                    backgroundColor:
                                                        index === activeIndex ? "#f0f0f0" : "#fff",
                                                }}
                                                onClick={() => {
                                                    setSearchText(term);
                                                    Cookies.set("search_suggestion", term, {
                                                        expires: 0.01,
                                                    });
                                                    navigate(searchPath);
                                                    setSuggestions([]);
                                                    // document.getElementById("form_submit").click();
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
                        <GatsbyLink to="/terms-condition"> {t("search.termsLink")}</GatsbyLink>
                    </span>

                    {originalPath === `${searchPath}/` ? (
                        <div className="result mt-48">
                            {loading ? (
                                <div className="spinner" id="loader">
                                    {Array.from({ length: 4 })?.map((_, index) => {
                                        return <div className={`box-${index + 1}`} key={index}></div>;
                                    })}
                                </div>
                            ) : (

                                <div className="data_results data_results_search">
                                    {searchResults?.length ? (
                                        searchResults?.map?.((result, index) => (
                                            <div
                                                key={index}
                                                className="result-item"
                                                onClick={() => {
                                                    handleConvert(result);
                                                }}
                                            >
                                                <img
                                                    src={result?.thumbMedium || result?.thumbDefault}
                                                    alt={result.title}
                                                />
                                                <h3>
                                                    {result?.title}
                                                </h3>
                                                <div className="btn-submit" id="btn-submit">Download</div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="not-found warning" >
                                            {t("notFound")}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ) : null}

                </div>
            </div>
            {originalPath === `${convertPath}/` ? (
                <div className="result mt-48 container">
                    {!convertLocation?.id ? (
                        <div className="spinner" id="loader">
                            {Array.from({ length: 4 })?.map?.((_, index) => {
                                return <div className={`box-${index + 1}`} key={index}></div>;
                            })}
                        </div>
                    ) : (
                        <div className="data_results mt-48">
                            {blockedIds?.includes?.(convertLocation?.id) ? (
                                <div className="blocked_error bloacked_id_error warning">
                                    <h3>Sorry</h3>
                                    <h3>
                                        At the request of the copyright owner, this video cannot be
                                        downloaded.
                                    </h3>
                                </div>
                            ) : !blockedIds?.includes?.(convertLocation?.id) ? (
                                <div className="down_wrap">
                                    <iframe
                                        title="yt-meta"
                                        id="widgetPlusApi"
                                        src={`https://ac.insvid.com/widget?url=https://www.youtube.com/watch?v=${convertLocation?.id
                                            }&el=${convertTimeToSeconds(convertLocation?.duration)}`}
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
