#import "HelloModule.h"

@implementation HelloModule

RCT_EXPORT_MODULE()

RCT_REMAP_METHOD(helloWorld,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    resolve(@"Hello from iOS Native Module!");
}

@end 