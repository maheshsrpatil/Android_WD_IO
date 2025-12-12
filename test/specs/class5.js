const chromeObjects=require('../pageobjects/chromeObjects')

describe("suite",()=>{
    it("test",async()=>{
        const chromeapp=chromeObjects.openChrome
        await browser.pause(2000)
        await chromeapp.click();
        await browser.pause(2000)
        const input=chromeObjects.clstxt
        await browser.pause(2000)
        await input.addValue("Mahesh Patil")
        
        await browser.pause(5000)
        expect(await input).toHaveText("Mahesh Patil")

    })
})