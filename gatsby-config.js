/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        languages: ["en", "fr"],
        defaultLanguage: "en",
        path: `${__dirname}/locales`,
        siteUrl: "https://example.com/",
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
  siteMetadata: {
    title: `yt1`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.webp",
      },
    },
    {
      resolve: "gatsby-plugin-react-helmet",
      options: {
      },
    },
  ],
};
