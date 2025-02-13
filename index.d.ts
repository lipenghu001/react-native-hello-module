declare module 'react-native-my-hello' {
  export default {
    /**
     * Returns a greeting message from native module
     * @param name The name to greet
     * @returns A promise that resolves with the greeting message
     */
    helloWorld(name: string): Promise<string>;
  };
}