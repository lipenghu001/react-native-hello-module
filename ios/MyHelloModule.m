#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MyHelloModule, NSObject)
RCT_EXTERN_METHOD(helloWorld:(NSString *)name
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
@end