const { languages, defaultLanguage } = require('./src/constant');

module.exports = {
    siteMetadata: {
        title: `yt1`,
        siteUrl: `https://y2meta.lol`,
    },
    plugins: [
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "static/images/favicon.webp",
            },
        },
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                localeJsonSourceName: `locales`,
                languages,
                defaultLanguage,
                siteUrl: `https://y2meta.lol`,
                redirect: true,
                getLanguageFromPath: true,
                prefixDefaultLanguage: true,
                i18nextOptions: {
                    defaultNS: 'translation',
                    ns: ['translation', 'youtube-to-mp3', 'youtube-to-mp4'],
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
                ]
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `locales`,
                path: `${__dirname}/src/locales/lang`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `locales`,
                path: `${__dirname}/src/locales/youtube-to-mp3`, // mp3-specific texts
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `locales`,
                path: `${__dirname}/src/locales/youtube-to-mp4`, // mp4-specific texts
            },
        },
    ],
};