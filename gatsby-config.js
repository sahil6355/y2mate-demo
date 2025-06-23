const { languages, defaultLanguage } = require('./src/constant');

module.exports = {
  siteMetadata: {
    title: `yt1`,
    siteUrl: `https://y2meta.lol`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`,
        languages,
        defaultLanguage,
        siteUrl: `https://y2meta.lol`,
        redirect: false,
        getLanguageFromPath: true,
        prefixDefaultLanguage: true,
        i18nextOptions: {
          defaultNS: 'translation',
          //debug: true,
          lowerCaseLng: true,
          saveMissing: false,
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          // keySeparator: false,
          // nsSeparator: false
        },
        pages: [
          {
            matchPath: '/search',
            languages: [defaultLanguage]
          },
          {
            matchPath: '/convert',
            languages: [defaultLanguage]
          },
          {
            matchPath: '/about',
            languages: [defaultLanguage]
          },
          {
            matchPath: '/contact',
            languages: [defaultLanguage]
          },
          {
            matchPath: '/terms-condition',
            languages: [defaultLanguage]
          },
          {
            matchPath: '/privacy-policy',
            languages: [defaultLanguage]
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
    {
      resolve: 'gatsby-plugin-no-javascript',
      options: {
        removeGeneratorTag: true,
      },
    },
  ],
};