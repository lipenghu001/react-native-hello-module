package com.helloworldmodule

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class HelloModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    
    override fun getName(): String = "HelloModule"
    
    @ReactMethod
    fun helloWorld(promise: Promise) {
        try {
            promise.resolve("Hello from Android Native Module!")
        } catch (e: Exception) {
            promise.reject("ERROR", e.message)
        }
    }
} 