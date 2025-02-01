// gatsby-node.js
exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage === "build") {
      actions.setWebpackConfig({
        devtool: false,
      });
    }
  };
  