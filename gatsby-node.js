exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // Ensure the page is for the 'tl' language and path starts with /tl/
  if (page.context && page.context.language === "tl" && page.path.startsWith("/tl/")) {
    const oldPage = { ...page };

    // Update the path from /tl/ to /tl-ph/
    page.path = page.path.replace(/^\/tl\//, "/tl-ph/");

    deletePage(oldPage);
    createPage(page);
  }
};
