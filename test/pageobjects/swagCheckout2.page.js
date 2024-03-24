const { $ } = require('@wdio/globals')

class SwagChekTwo{
    /**
     * Cart Page selectors
     */

    get finishBtn () {
        return $("//a[text()='FINISH']");
    }

    /**
        Cart Page methods
     */
    async clickFinish() {

        await(await this.finishBtn).click();
    }

}

module.exports = new SwagChekTwo();
