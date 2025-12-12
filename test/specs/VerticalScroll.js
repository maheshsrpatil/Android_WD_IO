const { browser } = require("@wdio/globals");
const apiDemos = require('../pageobjects/clsapidemo');   // ✅ import your class instance

describe('Swipe and open Phone app', () => {
    it('should swipe up on home screen and open Phone app', async () => {
        // wait for emulator to be ready
        await browser.pause(2000);

        // ✅ Call the method from your class
        await apiDemos.openApp();

        // give UI time to show the app drawer
        await browser.pause(2000);

        // tap on the Phone icon in the app drawer
        // Use accessibility id or text — this usually works on Android 11 emulators:
        const ApiDemo = await $('//android.widget.TextView[@content-desc="API Demos"]');

        await ApiDemo.waitForDisplayed({ timeout: 10000 });
        await ApiDemo.click();
            
        await $('.//android.widget.TextView[@content-desc="Views"]').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        await expect($('.//android.widget.TextView[@content-desc="WebView3"]')).toExist();


        
            


        
    
    });
});