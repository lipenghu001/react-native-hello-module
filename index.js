import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-my-hello' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const MyHelloModule = NativeModules.MyHelloModule
  ? NativeModules.MyHelloModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

// 详细的调试信息
console.log('Platform:', Platform.OS);
console.log('All Native Modules:', JSON.stringify(NativeModules, null, 2));
console.log('MyHelloModule:', MyHelloModule);

export default {
  helloWorld: async (name) => {
    if (!MyHelloModule?.helloWorld) {
      console.error('MyHelloModule.helloWorld is not available');
      console.error('Available methods:', Object.keys(MyHelloModule || {}));
      throw new Error('Native module method not available');
    }
    try {
      const result = await MyHelloModule.helloWorld(name);
      console.log('Native call result:', result);
      return result;
    } catch (error) {
      console.error('Error calling helloWorld:', error);
      throw error;
    }
  }
};