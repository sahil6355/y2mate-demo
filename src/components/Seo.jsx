import { useLocation } from "@reach/router";
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Seo = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const containerTitle = t(`containerTitle.${location?.pathname}`, {
    returnObjects: true,
  });

  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
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
      <meta property="og:url" content="https://yt1s-psi.vercel.app" />
      <meta property="og:site_name" content="Y2Meta" />
      <link
        rel="preload"
        fetchpriority="high"
        as="image"
        href="../images/logo.webp"
        type="image/webp"
      />
      <link rel="icon" href="../images/logo.webp" />
    </Helmet>
  );
};

export default Seo;
