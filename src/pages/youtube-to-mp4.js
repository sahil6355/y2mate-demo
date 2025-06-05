import * as React from "react";
import "../styles/index.css";
import { Layout } from "../components/Layout";
import YoutubeToMp4 from "../components/YoutubeToMp4";
import Seo from "../components/Seo";
import { graphql } from "gatsby";

const Index = () => {
  return (
    <>
      <Layout>
        <YoutubeToMp4 />
      </Layout>
    </>
  );
};

export default Index;

export function Head({ data, pageContext }) {
  const currentPath = pageContext?.i18n?.originalPath || "/";
  const currentLang = pageContext?.i18n?.language || "en";
  const languages = pageContext?.i18n?.languages || "en";

  const dataLanguage = data?.locales?.edges?.find?.(
    (e) => e?.node?.ns === 'translation'
  )?.node?.data;

  const t = JSON.parse?.(dataLanguage || {});
  return <Seo containerTitlee={t.containerTitle} currentPath={currentPath} currentLang={currentLang} languages={languages} />
}

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