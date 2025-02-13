package com.myhello

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class MyHelloModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    
    companion object {
        private const val TAG = "MyHelloModule"
    }
    
    init {
        Log.d(TAG, "Module initialized with context: $reactContext")
    }
    
    override fun getName(): String {
        Log.d(TAG, "getName() called - returning MyHelloModule")
        return "MyHelloModule"
    }

    @ReactMethod
    fun helloWorld(name: String, promise: Promise) {
        Log.d(TAG, "helloWorld() called with name: $name")
        try {
            val result = "Hello, $name from Native!"
            Log.d(TAG, "Resolving promise with result: $result")
            promise.resolve(result)
        } catch (e: Exception) {
            Log.e(TAG, "Error in helloWorld: ${e.message}", e)
            promise.reject("ERROR", e.message)
        }
    }
}