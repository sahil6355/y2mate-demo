import { Link } from "gatsby";
import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

const Footer = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    const schemaForPage = () => {
        switch (currentPath) {
            case "/":
                return {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "url": "https://y2meta.lol/",
                    "name": "Y2meta - YouTube Downloader",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://y2meta.lol/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                };
            case "/youtube-to-mp3/":
                return {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Y2meta - YouTube to MP3 Converter",
                    "description": "Convert and download YouTube videos to MP3 format quickly and securely with Y2Meta.",
                    "url": "https://y2meta.lol/youtube-to-mp3/"
                };
            case "/youtube-to-mp4/":
                return {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Y2meta - YouTube to MP4 Converter",
                    "description": "Convert and download YouTube videos to MP4 format in high quality up to 4K using Y2Meta.",
                    "url": "https://y2meta.lol/youtube-to-mp4/"
                };
            default:
                return null;
        }
    };

    const schemaObject = schemaForPage();

    return (
        <>
            <div className="container">
                <div className="footer">
                    <p className="text-center">@2025 y2meta</p>
                    <ul>
                        <li>
                            <Link to="/about">About </Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/terms-condition">Terms and Condition </Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/sitemap.xml">Sitemap</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {schemaObject && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaObject)}
                </script>
            )}
        </>
    );
};

export default Footer;