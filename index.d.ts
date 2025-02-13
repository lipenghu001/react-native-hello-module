declare module 'react-native-hello-module' {
  export interface HelloModuleInterface {
    helloWorld(): Promise<string>;
  }

  const HelloModule: HelloModuleInterface;
  export default HelloModule;
} 