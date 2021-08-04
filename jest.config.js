module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
      "node_modules/(?!(react-native"
        + "|react-navigation-tabs"
        + "|react-native-splash-screen"
        + "|react-native-screens"
        + "|react-native-reanimated"
        + "|react-test-renderer"
        + "|react-native-easy-grid"
        + "|react-native-elements"
        + "|react-native-safe-area-context"
      + ")/)",
    ],
  }