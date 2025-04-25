import * as React from "react";
import "../styles/index.css";
import { Layout } from "../components/Layout";
import { I18nextProvider } from "react-i18next";
import YoutubeToMp3 from "../components/YoutubeToMp3";
import i18n from "../components/i18n";
import Seo from "../components/Seo";

const Index = () => {
  return (
    <I18nextProvider i18n={i18n}>
       <Seo />
      <Layout>
        <YoutubeToMp3 />
      </Layout>
    </I18nextProvider>
  );
};

export default Index;

