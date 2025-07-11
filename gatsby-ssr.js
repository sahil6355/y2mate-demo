// gatsby-ssr.js

exports.onRenderBody = ({ setHtmlAttributes, pathname }) => {
  // Extract language code from pathname
  const langCode = pathname.split("/")[1] || "en";

  // Optional: Define your allowed languages
  const supportedLanguages = ["en", "th", "es", "de"]; // Adjust as per your site setup

  // Validate language code or fallback
  const lang = supportedLanguages.includes(langCode) ? langCode : "en";

  // Set lang attribute
  setHtmlAttributes({ lang });
};
