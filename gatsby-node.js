exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions;
  
    // Only process i18n-generated pages
    if (page.context && page.context.language === "tl") {
      const oldPage = { ...page };
  
      // Replace /tl/ with /tl-ph/ in the path
      page.path = page.path.replace(/^\/tl\//, "/tl-ph/");
  
      deletePage(oldPage);
      createPage(page);
    }
  };
  