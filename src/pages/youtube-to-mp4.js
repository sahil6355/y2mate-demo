import * as React from "react";
import "../styles/index.css";
import { Layout } from "../components/Layout";
import { I18nextProvider } from "react-i18next";
import i18n from "../components/i18n";
import YoutubeToMp4 from "../components/YoutubeToMp4";
import Seo from "../components/Seo";

const Index = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Seo />
      <Layout>
        <YoutubeToMp4 />
      </Layout>
    </I18nextProvider>
  );
};

export default Index;
