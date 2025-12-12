describe("Hooks",()=>{
    before(async()=>{
        console.log("Before Suite")
    })
    after(()=>{
        console.log("After Suite")
    })
    beforeEach(()=>{
        console.log("Before Each Method")
    })
     afterEach(()=>{
        console.log("After Each Method")
    })
    it("TC1",()=>{
        console.log("Test case one")
    })
    it("TC2",()=>{
        console.log("Test case two")
    })
})