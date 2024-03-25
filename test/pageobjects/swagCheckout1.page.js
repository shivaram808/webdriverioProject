const { $ } = require('@wdio/globals')

class SwagChekOne{
    /**
     * Cart Page selectors
     */

    get firstName () {
        return $("#first-name");
    }
    get firstName () {
        return $("#first-name");
    }
    get firstName () {
        return $("#first-name");
    }
    get lastName () {
        return $("#last-name");
    }
    get zipCode () {
        return $("#postal-code");
    }
    get continueBtn () {
        return $("//input[@value='CONTINUE']");
    }

    /**
        Cart Page methods
     */
    async fillCheckoutInfo() {

        await(await this.firstName).setValue('test');
        await(await this.lastName).setValue('user');
        await(await this.zipCode).setValue('94108');
        await(await this.continueBtn).click();
    }

}

module.exports = new SwagChekOne();
