import * as React from "react";
import "../styles/index.css";
import { Layout } from "../components/Layout";
import Convert from "../components/Convert";
import Seo from "../components/Seo";
import { graphql } from "gatsby";
import Cookies from "js-cookie";

const Index = () => {
  const cookieData = Cookies.get?.("convert_data");
  const convertData = cookieData ? JSON.parse?.(cookieData) : null;

  return (
    <>
      <Seo />
      <Layout>
        <Convert location={convertData} />
      </Layout>
    </>
  );
};

export default Index;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;