import React, { useEffect } from "react";

// gatsby-ssr.js
exports.onRenderBody = ({ setHtmlAttributes, pathname }) => {
  const langCode = pathname.split("/")[1] || "en";
  setHtmlAttributes({ lang: langCode });
};