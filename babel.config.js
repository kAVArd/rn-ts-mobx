module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          api: './src/api',
          assets: './src/assets',
          components: './src/components',
          configs: './src/configs',
          features: './src/features',
          navigation: './src/navigation',
          stores: './src/stores',
          theme: './src/theme',
          utils: './src/utils',
        },
      },
    ],
  ],
};
