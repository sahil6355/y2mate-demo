import * as React from "react";
import "../styles/index.css";
import { Layout } from "../components/Layout";
import { I18nextProvider } from "react-i18next";
import i18n from "../components/i18n";
import YoutubeToMp4 from "../components/YoutubeToMp4";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <YoutubeToMp4 />
      </Layout>
    </I18nextProvider>
  );
};

export default Index;

export const Head = () => (
  <>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
      <title>YouTube to MP4 Converter | Y2Meta</title>
      <meta
        name="description"
        content=" Convert and download YouTube videos to MP4 format quickly and securely with Y2Meta. Choose from multiple video qualities, including 720p, 1080p, 2K, and up to 4K."
      />
      <meta
        property="og:title"
        content="YouTube to MP4 Converter | Y2Meta"
      />
      <meta
        property="og:description"
        content=" Convert and download YouTube videos to MP4 format quickly and securely with Y2Meta. Choose from multiple video qualities, including 720p, 1080p, 2K, and up to 4K."
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