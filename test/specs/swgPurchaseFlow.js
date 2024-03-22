
const swagLogin = require('../pageobjects/swagLogin.page')
const swagCart = require('../pageobjects/swagCart.page')
describe('Swag Labs Purchase Flow', () => {

    it('Swag Labs Login',async() => {

        await browser.maximizeWindow();
        await swagLogin.swgLogin('standard_user','secret_sauce')       
        let currentUrl = await driver.getUrl()
        expect(currentUrl).toContain('inventory')
        console.log('Successfully logged into to SwagLABS!!')
    })

    it('Add items to SwagCart',async() => {

        //adding requested items to cart
        await swagCart.addCart();
        let currentUrl = await driver.getUrl()
        expect(currentUrl).toContain('cart')
        console.log('Added required items to Cart Page')

    })
})