exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const languages = ['en', 'de', 'es', 'fr', 'hi', 'id', 'it', 'pt', 'ru', 'th', 'tr', 'vi', 'ja', 'ko', 'ms', 'ph', 'zh-cn', 'zh-tw', 'ar', 'bn'];

    languages.forEach(lang => {
        createPage({
            path: `/${lang}/`,
            component: require.resolve('./src/pages/index.js'),
            context: {
                language: lang,
                // required by gatsby-plugin-react-i18next
                i18n: {
                    language: lang,
                    languages,
                    defaultLanguage: 'en',
                },
            },
        });
    });
};
