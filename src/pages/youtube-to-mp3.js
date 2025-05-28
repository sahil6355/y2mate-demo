import * as React from "react";
import "../styles/index.css";
import { Layout } from "../components/Layout";
import YoutubeToMp3 from "../components/YoutubeToMp3";
import Seo from "../components/Seo";
import { graphql } from "gatsby";

const Index = () => {
  return (
    <>
      <Seo />
      <Layout>
        <YoutubeToMp3 />
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
