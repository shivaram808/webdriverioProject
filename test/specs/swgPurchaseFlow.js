
const swagLogin = require('../pageobjects/swagLogin.page')
const swagInventory = require('../pageobjects/swagInventory.page');
const swagCart = require('../pageobjects/swagCart.page');
const swagCheckout = require('../pageobjects/swagCheckout1.page');
const checkTwoFinish = require('../pageobjects/swagCheckout2.page');
describe('Swag Labs Purchase Flow', () => {


    var currentUrl;

    it('Swag Labs Login',async() => {

        await browser.maximizeWindow();
        await swagLogin.swgLogin('standard_user','secret_sauce')       
        currentUrl = await driver.getUrl()
        expect(currentUrl).toContain('inventory')
        console.log('Successfully logged into to SwagLABS!!')
    })

    it('Add items from inventory to SwagCart',async() => {

        //adding requested items to cart
        await swagInventory.addCart();
        await swagInventory.goToCart()
        currentUrl = await driver.getUrl()
        expect(currentUrl).toContain('cart')
        console.log('Added required items to Cart Page')

    })

    it('Cart Checkout',async() => {

        //Cart checkout

        await swagCart.ClickCheckout();
        currentUrl = await driver.getUrl();
        expect(currentUrl).toContain('checkout')
        console.log('Navigated to checkout page')
  
    })

    it('Fill checkout information',async() => {

        //Fill all the required checkout inforamation
        await swagCheckout.fillCheckoutInfo();
        currentUrl = await driver.getUrl();
        expect(currentUrl).toContain('checkout-step-two')
        console.log('Navigated to checkout page')
    
    })

    it('Verify Prices and Finish Purchase',async() => {

        //Fill all the required checkout inforamation
        await checkTwoFinish.clickFinish();
        currentUrl = await driver.getUrl();
        expect(currentUrl).toContain('checkout-complete')
        console.log('Purchase completed successfully!!')
        await browser.pause(5000);
    })

})