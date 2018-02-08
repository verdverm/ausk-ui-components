const config = {
  builders: {
    web: {
      entry: './src/index.js',
      stack: ['react-native-web', 'web'],
      openBrowser: true,
      defines: {
        __CLIENT__: false
      },
      enabled: true
    },
    test: {
      stack: ['react-native-web', 'server'],
      roles: ['test'],
      defines: {
        __TEST__: true
      }
    }
  },
  options: {
    stack: ['apollo', 'react', 'styled-components', 'css', 'sass', 'less', 'es6', 'webpack'],
    cache: '../../.cache',
    ssr: true,
    webpackDll: true,
    reactHotLoader: false,
    persistGraphQL: false,
    frontendRefreshOnBackendChange: false
  }
};


