import * as React from "react";
import "../styles/index.css";
import { Layout } from "../components/Layout";
import Contact from "../components/Contact";
import Seo from "../components/Seo";
import { graphql } from "gatsby";



const Index = () => {
    return (
        <>
            <Seo />
            <Layout>
                <Contact />
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