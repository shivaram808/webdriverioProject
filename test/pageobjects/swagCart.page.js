const { $ } = require('@wdio/globals')

class SwagCartPage{
    /**
     * Cart Page selectors
     */
    get backPack () {
        return $("//div[text()='Sauce Labs Backpack']/parent::a/parent::div/following-sibling::div//button[text()='ADD TO CART']");
    }

    get redTShirt () {
        return $("//div[contains(text(),'T-Shirt (Red)')]/parent::a/parent::div/following-sibling::div//button[text()='ADD TO CART']");
    }

    get cartIcon () {
        return $(".shopping_cart_container a svg");
    }

    /**
        Add to cart methods
     */
    async addCart () {
        
        await (await this.backPack).click();
        await browser.pause(5000)
        await(await (this.redTShirt)).scrollIntoView();
        await (await this.redTShirt).click();
        await (await this.cartIcon).click();
        await browser.pause(5000)
        return;
    }

}

module.exports = new SwagCartPage();
