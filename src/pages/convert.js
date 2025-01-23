import * as React from "react";
import "../styles/index.css";
import { Layout } from "../components/Layout";
import { I18nextProvider } from "react-i18next";
import i18n from "../components/i18n";
import { Helmet } from "react-helmet";
import Convert from "../components/Convert";

const Index = ({location}) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <Convert location={location}/>
      </Layout>
    </I18nextProvider>
  );
};

export default Index;

export const Head = () => (
  <>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
      <title>Y2Meta - Free YouTube Downloader (1080p)</title>
      <meta
        name="description"
        content="Y2Meta is a popular online YouTube Downloader that lets you save videos in HD, 4K, and 8K quality without any registration. Fast, easy, and free to use!"
      />
      <meta
        property="og:title"
        content="Y2Meta - Free YouTube Downloader (1080p)"
      />
      <meta
        property="og:description"
        content="Y2Meta is a popular online YouTube Downloader that lets you save videos in HD, 4K, and 8K quality without any registration. Fast, easy, and free to use!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="YOUR_URL" />
      <meta property="og:site_name" content="Y2Mate" />
      <link
        rel="preload"
        fetchpriority="high"
        as="image"
        href="../images/image.webp"
        type="image/webp"
      />
      <link rel="icon" href="../images/favicon.webp" />
    </Helmet>
  </>
);
