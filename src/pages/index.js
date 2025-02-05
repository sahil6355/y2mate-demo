import * as React from "react";
import "../styles/index.css";
import { Layout } from "../components/Layout";
import { I18nextProvider } from "react-i18next";
import i18n from "../components/i18n";
import Home from "../components/Home";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <Home />
      </Layout>
    </I18nextProvider>
  );
};

export default Index;

export const Head = () => (
  <>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Y2Meta - Free YouTube Downloader (1080pp)</title>
      <meta
        name="description"
        content="Y2Meta is a popular online YouTube Downloader that lets you save videos in HD, 4K, and 8K quality without registration. It's fast, easy, and free to use!"
      />
      <meta property="og:title" content="Y2Meta - Free YouTube Downloader (1080p)" />
      <meta
        property="og:description"
        content="Y2Meta is a popular online YouTube Downloader that lets you save videos in HD, 4K, and 8K quality without registration. It's fast, easy, and free to use!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yt1s-psi.vercel.app" />
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
