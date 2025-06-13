import { Link } from "gatsby";
import React, { useEffect } from "react";

const Footer = () => {

    useEffect(() => {
        // Inject Google Analytics script
        const script1 = document.createElement("script");
        script1.src = "https://www.googletagmanager.com/gtag/js?id=G-R1QQF1FWWS";
        script1.async = true;
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R1QQF1FWWS');
        `;
        document.head.appendChild(script2);
    }, []);
    
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
        </>

    );
};

export default Footer;