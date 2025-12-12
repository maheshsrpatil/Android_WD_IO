describe('Phone App Suite', () => {
    it('should open the Chrome app', async () => {
        // wait a bit for UI to load
        await browser.pause(3000);

        const expectedList = ['Friday, Dec 5', 'Messages', 'Chrome'];
        const actualList = [];

        const listOfValues = await $$('android.widget.TextView');
        for (const ele of listOfValues) {
            const text = await ele.getText();
            if (text && text.trim() !== '') {
                actualList.push(text.trim());
            }
        }

        console.log('Actual List:', actualList);

        // ✅ Only check presence, not full equality
        for (const expected of expectedList) {
            await expect(actualList).toContain(expected);
        }

        // Optional: click on Chrome
        const chromeApp = await $('android=new UiSelector().textContains("Chrome")');
        await chromeApp.waitForDisplayed({ timeout: 10000 });
        await chromeApp.click();

        await browser.pause(2000);
    });
});
