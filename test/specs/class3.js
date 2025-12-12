describe('Phone App Suite', () => {
    it('should open the Chrome app', async () => {
        // wait a bit for UI to load
        await browser.pause(3000);

        // Correct selector
        const chromeApp = await $('android=new UiSelector().textContains("Chrome")');

        // Wait until element is visible and click it
        await chromeApp.waitForDisplayed({ timeout: 10000 });
        await chromeApp.click();

        await browser.pause(2000);
    });
});