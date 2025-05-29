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
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`,
        languages: ['en', 'de', 'es', 'fr', 'hi', 'id', 'it', 'pt', 'ru', 'th', 'tr', 'vi', 'ja', 'ko', 'ms', 'ph', 'zh-cn', 'zh-tw', 'ar', 'bn'],
        defaultLanguage: 'en',
        siteUrl: `https://www.yourdomain.tld`,
        redirect: true,
        getLanguageFromPath: true,
        prefixDefaultLanguage: true,
        i18nextOptions: {
          interpolation: { escapeValue: false },
          ns: ["translation"],
          defaultNS: "translation",
          fallbackLng: false,
          lowerCaseLng: true,
          saveMissing: false
        },
        pages: [
          {
            matchPath: '/search',
            languages: ['en']
          },
          {
            matchPath: '/convert',
            languages: ['en']
          },
          {
            matchPath: '/about',
            languages: ['en']
          },
          {
            matchPath: '/contact',
            languages: ['en']
          },
          {
            matchPath: '/privacy-policy',
            languages: ['en']
          },
          {
            matchPath: '/terms-condition',
            languages: ['en']
          },
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: `${__dirname}/src/locales`,
      },
    },
  ],
};
