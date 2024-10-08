module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    '@babel/plugin-transform-template-literals',
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./app'],
        alias: {
          assets: './app/views/assets',
          components: './app/views/components',
          elements: './app/views/elements',
          modals: './app/views/modals',
          containers: './app/views/containers',
        },
      },
    ],
  ],
};
