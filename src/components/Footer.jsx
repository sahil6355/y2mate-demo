import { Link } from "gatsby";
import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

const Footer = () => {

    const location = useLocation();
    const currentPath = location.pathname;
    const schemaPages = ["/", "/youtube-to-mp3/", "/youtube-to-mp4/"];
    const shouldAddSchema = schemaPages.includes(currentPath);

    // useEffect(() => {
    //     // Inject Google Analytics script
    //     const script1 = document.createElement("script");
    //     script1.src = "https://www.googletagmanager.com/gtag/js?id=G-R1QQF1FWWS";
    //     script1.async = true;
    //     document.head.appendChild(script1);
    //     const script2 = document.createElement("script");
    //     script2.innerHTML = `
    //         window.dataLayer = window.dataLayer || [];
    //         function gtag(){dataLayer.push(arguments);}
    //         gtag('js', new Date());
    //         gtag('config', 'G-R1QQF1FWWS');
    //     `;
    //     document.head.appendChild(script2);
    // }, []);
    
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

            {shouldAddSchema && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "url": "https://y2meta.lol" + currentPath,
                        "name": "Y2meta - YouTube Downloader",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://y2meta.lol/search?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    })}
                </script>
            )}
        </>
    );
};

export default Footer;