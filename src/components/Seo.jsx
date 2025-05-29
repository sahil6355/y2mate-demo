import React from "react";
import { Helmet } from "react-helmet";
// import { useTranslation } from "react-i18next";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useI18next } from "gatsby-plugin-react-i18next";

const Seo = () => {
    const { t } = useTranslation();
    const { languages, language, originalPath } = useI18next();

    const currentPath = originalPath || "/";
    const currentLang = language || "en";

    const containerTitle = t(`containerTitle.${currentPath}`, {
        returnObjects: true,
    });

    return (
        <Helmet htmlAttributes={{ lang: currentLang }}>
            <meta name="robots" content="noindex, nofollow" data-gatsby-head="true" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{containerTitle?.helmetTitle}</title>
            <meta name="description" content={containerTitle?.helmetDescription} data-gatsby-head="true" />
            <meta property="og:title" content={containerTitle?.helmetTitle} data-gatsby-head="true" />
            <meta property="og:description" content={containerTitle?.helmetDescription} data-gatsby-head="true" />
            <meta property="og:type" content="website" data-gatsby-head="true" />
            <meta property="og:url" content={`https://yt1s-psi.vercel.app${currentPath}`} data-gatsby-head="true" />
            <meta property="og:site_name" content="Y2Meta" data-gatsby-head="true" />

            {/* Favicon */}
            <link rel="preload" fetchpriority="high" as="image" href="../images/logo.webp" type="image/webp" />
            <link rel="icon" href="../images/favicon.webp" />

            <link rel="canonical" href={`https://yt1s-psi.vercel.app/${currentLang}`} />
            {languages?.map?.((k) => (
                <link key={k} rel="alternate" hrefLang={k} href={`/${k}${currentPath}`} data-gatsby-head="true" />
            ))}
        </Helmet>
    );
};

export default Seo;