const withImage = require('next-images');
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const optimizedImages = require('next-optimized-images');
const withPlugins = require("next-compose-plugins");
const withLess = require("@zeit/next-less");

if (typeof require !== "undefined") {
    require.extensions[".less"] = (file) => {};
  }

module.exports = withPlugins(
    [[withImage], [withCSS, {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: "[local]___[hash:base64:5]",
        },
        ...withLess(
          withSass({
            lessLoaderOptions: {
              javascriptEnabled: true,
            },
          })
        ),
      }], [withSass], [optimizedImages]]
);
