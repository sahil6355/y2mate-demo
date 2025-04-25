module.exports = {
  siteMetadata: {
    title: `yt1`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/images/logo.webp",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
