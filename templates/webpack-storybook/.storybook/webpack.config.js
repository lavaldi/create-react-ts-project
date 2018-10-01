const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.tsx?$/,
    loader: require.resolve("awesome-typescript-loader")
  });
  defaultConfig.module.rules.push({
    test: /\.tsx?$/,
    enforce: "pre",
    loader: require.resolve("tslint-loader")
  });

  defaultConfig.resolve.extensions.push(".ts", ".tsx");
  return defaultConfig;
};
