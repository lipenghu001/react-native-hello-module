import { NativeModules } from 'react-native';

const { HelloModule } = NativeModules;

export default {
  helloWorld: () => HelloModule.helloWorld(),
}; 