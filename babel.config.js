module.exports = {
presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@stores': './src/stores',
          '@models': './src/models',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
