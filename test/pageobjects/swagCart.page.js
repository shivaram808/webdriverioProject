const { $ } = require('@wdio/globals')

class SwagCartPage{
    /**
     * Cart Page selectors
     */

    get ckeckoutBtn () {
        return $(".checkout_button");
    }

    /**
        Cart Page methods
     */
    async ClickCheckout() {

        await(await this.ckeckoutBtn).click();
    }

}

module.exports = new SwagCartPage();
