const { getDefaultConfig } = require("expo/metro-config");

// Полифилл для react-native-reanimated
if (typeof global !== 'undefined') {
  global.useWorkletCallback = global.useWorkletCallback || ((callback) => callback);
}

module.exports = (() => {
  const config = getDefaultConfig(__dirname)

  const { transformer, resolver } = config

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"]
  };

  return config
})()
