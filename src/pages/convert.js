import * as React from "react";
import "../styles/index.css";
import { Layout } from "../components/Layout";
import { I18nextProvider } from "react-i18next";
import i18n from "../components/i18n";
import Convert from "../components/Convert";
import Seo from "../components/Seo";

const Index = ({location}) => {
  return (
    <I18nextProvider i18n={i18n}>
       <Seo />
      <Layout>
        <Convert location={location}/>
      </Layout>
    </I18nextProvider>
  );
};

export default Index;
