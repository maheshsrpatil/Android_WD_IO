describe('Phone App Suite', () => {
    it('should open the Phone app and tap on dial pad', async () => {
        // wait a bit for UI to load
        await browser.pause(3000)

        // use accessibility ID for dial pad (content-desc)
        const dialPadButton = await $('~Phone') // adjust if your emulator differs
        await dialPadButton.waitForDisplayed({ timeout: 10000 })
        await dialPadButton.click()

        await browser.pause(2000)
    })
})