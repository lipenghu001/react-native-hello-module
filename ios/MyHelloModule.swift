import Foundation

@objc(MyHelloModule)
class MyHelloModule: NSObject {
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
  
  @objc
  func helloWorld(_ name: String, resolver: @escaping RCTPromiseResolveBlock, rejecter: @escaping RCTPromiseRejectBlock) {
    do {
      let result = "Hello, \(name) from Native!"
      resolver(result)
    } catch {
      rejecter("ERROR", error.localizedDescription, error)
    }
  }
}