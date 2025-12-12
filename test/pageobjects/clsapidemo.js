class apiDemos{
    async openApp(){
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
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 500, x: startX, y: endY },
                    { type: 'pointerUp', button: 0 }
                ]
            }]);
    }

    

}

module.exports  = new apiDemos(); 