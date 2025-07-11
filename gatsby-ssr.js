// gatsby-ssr.js

exports.onRenderBody = ({ setHtmlAttributes, pathname }) => {
  const langCodeFromPath = pathname.split("/")[1] || "en";

  setHtmlAttributes({ lang: langCodeFromPath || "en" });
};
