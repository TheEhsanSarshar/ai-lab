// if you use expo remove this line
import {AppRegistry} from 'react-native';

import {getStorybookUI, configure} from '@storybook/react-native';

// import storiess
configure(() => {
  require('./AILabNativeImage.stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('AILabNative', () => StorybookUIRoot);

export {StorybookUIRoot};
