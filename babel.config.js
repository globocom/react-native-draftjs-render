const babelFunction = (api) => {
  const presets = ['module:metro-react-native-babel-preset'];
  api.cache.never();
  return {
    presets,
  };
};

module.exports = babelFunction;
