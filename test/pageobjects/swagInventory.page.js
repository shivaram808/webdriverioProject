const { $ } = require('@wdio/globals')

class SwagInventoryPage{
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
        await(await (this.redTShirt)).scrollIntoView();
        await (await this.redTShirt).click();   
        return;
    }

    async goToCart()
    {
        await (await this.cartIcon).click();
        return;
    }

}

module.exports = new SwagInventoryPage();
