import React, { useEffect, useRef, useState } from "react";
import headerLogo from "../../static/images/logo.webp";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import { homePath, languageDD, mp3Path, mp4Path } from "../constant";
import { useLocation } from "@reach/router";

const Header = React.memo(() => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const { i18n } = useTranslation();
  const location = useLocation();
  const pathname = location?.pathname;
  const navbarRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage) {
        const getLang = languageDD?.[storedLanguage];
        if (getLang) {
          i18n.changeLanguage(storedLanguage);
        }
      }
    }, 0);
  }, [i18n]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains?.(event?.target)) {
        setToggleNav(false);
        setAnchorEl(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleToggleMenu = (e) => {
    e.stopPropagation();
    setAnchorEl((prev) => !prev);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    handleClose();
  };

  return (
    <div className="container">
      <header className="header" ref={navbarRef}>
        <div className="header-box">
          <div className="header-left">
            <img src={headerLogo} width="50" height="50" alt="y2meta logo" />
            <Link to={homePath}>y2meta</Link>
          </div>
          <div className="header-right">
            <ul className={`navbar ${toggleNav ? "open_menu" : ""}`}>
              <li>
                <Link
                  to={homePath}
                  className={`${pathname === homePath && "active"}`}
                >
                  YouTube Downloader
                </Link>
              </li>
              <li>
                <Link
                  to={mp3Path}
                  className={`${pathname === `${mp3Path}/` && "active"}`}
                >
                  YouTube to MP3
                </Link>
              </li>
              <li>
                <Link
                  to={mp4Path}
                  className={`${pathname === `${mp4Path}/` && "active"}`}
                >
                  YouTube to MP4
                </Link>
              </li>
              <li className="language">
                <div className="lang-wrap">
                  <button id="language-btn" onClick={handleToggleMenu}>
                    {languageDD?.[i18n?.language]}
                  </button>
                </div>
                {anchorEl && (
                  <ul
                    id="language-dropdown"
                    className={`sub-language ${anchorEl ? "lang_menu" : ""}`}
                  >
                    {Object.entries(languageDD)?.map?.(([k, v], index) => (
                      <li key={index}>
                        <p onClick={() => changeLang(k)}>{v}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
            <button
              type="button"
              className="mobile-menu"
              id="navbarToggle"
              aria-label="navbar toggle"
              onClick={() => {
                setToggleNav(!toggleNav);
                setAnchorEl(false);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
});

export default Header;
