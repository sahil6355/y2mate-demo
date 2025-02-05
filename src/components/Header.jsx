import React, { useEffect, useState } from "react";
import headerLogo from "../../static/images/favicon.webp";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";
import { languageDD } from "../constant";
import { useLocation } from "@reach/router";

const Header = React.memo(() => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [language, setLanguage] = useState("English");
  const [toggleNav, setToggleNav] = useState(false);
  const location = useLocation();
  const pathname = location?.pathname;
  const { i18n } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage) {
        const getLang = languageDD?.find((lang) => lang?.code === storedLanguage);
        if (getLang) {
          setLanguage(getLang?.name);
          i18n.changeLanguage(storedLanguage);
        }
      }
    }, 0);
  }, [i18n]);

  const handleToggleMenu = () => {
    setAnchorEl((prev) => !prev);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const changeLang = (code, name) => {
    i18n.changeLanguage(code);
    setLanguage(name);
    localStorage.setItem("language", code);
    handleClose();
  };

  return (
    <header>
      <div className="sub-header">
        <Link to="/" className="header-logo" aria-label="home link">
          <span className="img logo">
            <img src={headerLogo} alt="logo" />
          </span>
          <span>y2meta.lol</span>
        </Link>
        <div className={`nav ${toggleNav ? "active" : ""}`}>
          <Link to="/" className={`${pathname === "/" && "active"}`}>
            Youtube Downloader
          </Link>
          <Link to="/youtube-to-mp3" className={`${pathname === "/youtube-to-mp3/" && "active"}`}>
            Youtube to MP3
          </Link>
          <Link to="/youtube-to-mp4" className={`${pathname === "/youtube-to-mp4/" && "active"}`}>
            Youtube to MP4
          </Link>

          {/* Language Dropdown */}
          <div className="language">
            <button className="lang" onClick={handleToggleMenu}>
              {language} ▼
            </button>

            {anchorEl && (
              <ul className="language-menu">
                {languageDD?.map((lang, index) => (
                  <li key={index} onClick={() => changeLang(lang?.code, lang?.name)}>
                    {lang?.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <button
          type="button"
          className="navbar-toggler"
          id="navbarToggle"
          aria-label="navbar toggle"
          onClick={() => setToggleNav(!toggleNav)}
        >
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
        </button>
      </div>
    </header>
  );
});

export default Header;
