/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  resolver: {
    blacklistRE: blacklist([
      /node_modules\/.*\/node_modules\/react-native\/.*/,

      // /node_modules\/rn-fetch-blob\/node_modules\/react-native\/.*/,
      // /node_modules\/epubjs-rn\/node_modules\/react-native\/.*/,
      // /node_modules\/epubjs-rn\/node_modules\/.*\/node_modules\/react-native\/.*/,
      // /node_modules\/react-native-zip-archive\/node_modules\/react-native\/.*/,
      // /node_modules\/@lightbase\/react-native-orientation\/node_modules\/react-native\/.*/,
    ]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
