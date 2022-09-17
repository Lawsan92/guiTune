const path = require('path');

// react-native >= 0.57
const extraNodeModules = {
  'react-native-recording': path.resolve(__dirname + '/../guiTune/'),
};
const watchFolders = [
  path.resolve(__dirname + '/../guiTune/')
];

module.exports = {
  resolver: {
    extraNodeModules,
  },
  watchFolders
};