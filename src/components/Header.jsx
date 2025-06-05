import React, { useEffect, useRef, useState } from "react";
import headerLogo from "../../static/images/logo.webp";
import { homePath, languageDD, mp3Path, mp4Path } from "../constant";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

const Header = React.memo(() => {
    const [anchorEl, setAnchorEl] = useState(false);
    const [toggleNav, setToggleNav] = useState(false);
    const { languages, language, originalPath, changeLanguage } = useI18next();
    const navbarRef = useRef(null);

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
        changeLanguage(code);
        handleClose();
    };

    return (
        <div className="container">
            <header className="header" ref={navbarRef}>
                <div className="header-box">
                    <div className="header-left">
                        <Link to={homePath}><img src={headerLogo} width="140" height="50" alt="y2meta logo" /></Link>
                    </div>
                    <div className="header-right">
                        <ul className={`navbar ${toggleNav ? "open_menu" : ""}`}>
                            <li>
                                <Link to={homePath} className={`${originalPath === homePath && "active"}`}>
                                    YouTube Downloader
                                </Link>
                            </li>
                            <li>
                                
                                <Link to={mp3Path} className={`${originalPath === `${mp3Path}/` && "active"}`}>
                                    YouTube to MP3
                                </Link>
                            </li>
                            <li>
                                <Link to={mp4Path} className={`${originalPath === `${mp4Path}/` && "active"}`}>
                                    YouTube to MP4
                                </Link>
                            </li>
                            <li className="language">
                                <div className="lang-wrap">
                                    <button id="language-btn" onClick={handleToggleMenu}>
                                        {languageDD?.[language]}
                                    </button>
                                </div>
                                {anchorEl && (
                                    <ul id="language-dropdown" className={`sub-language ${anchorEl ? "lang_menu" : ""}`}>
                                        {languages?.map?.((lng, index) => (
                                            <li key={index}>
                                                <Link to={originalPath} language={lng} onClick={handleClose}> {languageDD?.[lng]} </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        </ul>
                        <button type="button" className="mobile-menu" id="navbarToggle" aria-label="navbar toggle" onClick={() => { setToggleNav(!toggleNav); setAnchorEl(false); }}>
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
