module.exports = {
  siteMetadata: {
    title: `yt1`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // Remove this block
    // {
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     languages: ["en", "fr"],
    //     defaultLanguage: "en",
    //     path: `${__dirname}/locales`,
    //     siteUrl: "https://yt1s-psi.vercel.app/",
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false,
    //       },
    //       keySeparator: false,
    //       nsSeparator: false,
    //     },
    //   },
    // },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/images/favicon.webp",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
