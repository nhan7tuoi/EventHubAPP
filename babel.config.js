module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
    ],
    // dependencies: {
    //   'react-native-vector-icons': {
    //     platforms: {
    //       ios: null,
    //     },
    //   },
    // }
  };
};
