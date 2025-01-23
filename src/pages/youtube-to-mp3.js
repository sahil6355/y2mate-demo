import * as React from "react";
import "../styles/index.css";
import { Layout } from "../components/Layout";
import { I18nextProvider } from "react-i18next";
import YoutubeToMp3 from "../components/YoutubeToMp3";
import i18n from "../components/i18n";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <YoutubeToMp3 />
      </Layout>
    </I18nextProvider>
  );
};

export default Index;

export const Head = () => (
  <>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
      <title>Free YouTube To MP3 Converter - Y2Meta</title>
      <meta
        name="description"
        content="Convert YouTube videos to MP3 for free and in high quality with Y2Meta. Download MP3s quickly without signup using the Y2Meta YouTube To MP3 converter tool."
      />
      <meta
        property="og:title"
        content="Free YouTube To MP3 Converter - Y2Meta"
      />
      <meta
        property="og:description"
        content="Convert YouTube videos to MP3 for free and in high quality with Y2Meta. Download MP3s quickly without signup using the Y2Meta YouTube To MP3 converter tool."
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
