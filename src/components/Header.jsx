import React from "react";
import headerLogo from "../images/favicon.webp";
import { Link } from "gatsby";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import { languageDD } from "../constant";
import { useLocation } from "@reach/router";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language, setLanguage] = React.useState("English");
  const open = Boolean(anchorEl);
  const location = useLocation();
  const pathname = location?.pathname;
  const { i18n } = useTranslation();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeLang = (d, name) => {
    i18n.changeLanguage(d);
    setLanguage(name);
    handleClose();
  };

  return (
    <header>
      <div className="sub-header">
        <Link to="/" className="header-logo" area-label="home link">
          <span className="img logo">
            <img src={headerLogo} alt="logo" />
          </span>
          <span>y2meta.lol</span>
        </Link>
        <div className="nav">
          <Link to="/" className={`${pathname === "/" && "active"}`}>
            Youtube Downloader
          </Link>
          <Link
            to="/youtube-to-mp3"
            className={`${pathname === "/youtube-to-mp3/" && "active"}`}
          >
            Youtube to MP3
          </Link>
          <Link
            to="/youtube-to-mp4"
            className={`${pathname === "/youtube-to-mp4/" && "active"}`}
          >
            Youtube to MP4
          </Link>
          <div className="language">
            <Button
              className="languege_selection"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {language}
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {languageDD?.map((lang, index) => {
                return (
                  <MenuItem
                    key={index}
                    onClick={() => changeLang(lang?.code, lang?.name)}
                  >
                    {lang?.name}
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
        </div>

        <button
          type="button"
          className="navbar-toggler"
          id="navbarToggle"
          aria-label="navbar toggle"
        >
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
