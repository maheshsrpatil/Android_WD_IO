const path=require('path')
const{config}=require('./wdio.shared.config') 
config.port=4723
config.specs= [
        './test/specs/**/*.js'
    ]

    config.capabilities= [{
  platformName: 'Android',
  'appium:deviceName': 'nightwatch-android-11',
  'appium:platformVersion': '11.0',
  'appium:automationName': 'UiAutomator2',
  //'appium:appPackage': 'com.android.dialer',
  //'appium:appActivity': 'com.android.dialer.main.impl.MainActivity',
  //'appium:appPackage': 'com.android.chrome',
  //'appium:appActivity': 'com.google.android.apps.chrome.Main',
   'appium:app': '/Users/maheshpatil/Documents/ApiDemos-debug.apk',
    'appium:autoGrantPermissions': true,
  'appium:noReset': true,
  'appium:autoGrantPermissions': true,
  'appium:disableWindowAnimation': true,
  'appium:newCommandTimeout': 300
}]

exports.config=config;