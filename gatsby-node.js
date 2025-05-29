exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const languages = ['en', 'hi', 'zh-cn'];

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