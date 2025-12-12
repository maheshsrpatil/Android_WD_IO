const { browser } = require("@wdio/globals");

describe('Swipe and open Phone app', () => {
    it('should swipe up on home screen and open Phone app', async () => {
        // wait for emulator to be ready
        await browser.pause(2000);

        // get screen size
        const { height, width } = await driver.getWindowRect();

        // define swipe start and end points
        const startX = width / 2;
        const startY = height * 0.9;   // near bottom
        const endY   = height * 0.3;   // near top

        // perform swipe gesture
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 1000, x: startX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        // give UI time to show the app drawer
        await browser.pause(2000);

        // tap on the Phone icon in the app drawer
        // Use accessibility id or text — this usually works on Android 11 emulators:
        const ApiDemo = await $('//android.widget.TextView[@content-desc="API Demos"]');

        await ApiDemo.waitForDisplayed({ timeout: 10000 });
        await ApiDemo.click();
        	
        await $('.//android.widget.TextView[@content-desc="App"]').click();
        await $('.//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        await $('.//android.widget.Button[@content-desc="OK Cancel dialog with a message"]').click();
        console.log(await browser.getAlertText());
        //await browser.acceptAlert();
        await browser.dismissAlert();
        await expect($('.//android.widget.TextView[@resource-id="android:id/alertTitle"]')).not.toExist();


        
        	


        
    
    });
});