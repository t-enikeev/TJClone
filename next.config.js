const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([[optimizedImages, {}]]);

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["leonardo.osnova.io"],
    loader: "imgix",
    path: "https://noop/",
  },
};
