import React from "react";

const Seo = ({ containerTitlee, currentPath, currentLang, languages }) => {
    const containerTitle = containerTitlee?.[currentPath] ?? {
        title: "Y2meta - YouTube Video Downloader",
        desc: "Download YouTube videos seamlessly in 1080p with Y2meta",
        helmetTitle:
            "Y2meta - YouTube Downloader | Download Free YouTube Videos in HD",
        helmetDescription:
            "Y2meta is a fast and free YouTube Downloader that allows you to convert and download Videos from YouTube in HD, UHD, 1080p, 2K, and 4K.",
    };

    return (
        <>
            <meta name="robots" content={["/search", "/convert"].includes(currentPath.replace(/\/$/, "")) ? "noindex, nofollow" : "noindex, nofollow"} data-gatsby-head="true" />

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{containerTitle?.helmetTitle}</title>
            <meta name="description" content={containerTitle?.helmetDescription} />
            <meta property="og:title" content={containerTitle?.helmetTitle} />
            <meta
                property="og:description"
                content={containerTitle?.helmetDescription}
            />
            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content={`https://y2meta.lol${currentPath}`}
            />
            <meta property="og:site_name" content="Y2Meta" />

            {/* Favicon */}

            <link rel="icon" href="images/favicon.webp"></link>
            <link
                rel="preload"
                fetchpriority="high"
                as="image"
                href="/images/logo.webp"
                type="image/webp"
            />

            <link
                rel="canonical"
                href={
                    currentLang === "en"
                        ? `https://y2meta.lol${currentPath}`
                        : `https://y2meta.lol/${currentLang}${currentPath}`
                }
            />

            {languages?.map?.((k) => (

                <link key={k} rel="alternate" hrefLang={k} href={k === "en" ? `https://y2meta.lol${currentPath}` : `https://y2meta.lol/${k}${currentPath}`} />

            ))}

        </>
    );
};

export default Seo;
