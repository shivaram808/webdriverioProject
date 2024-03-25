const { $ } = require('@wdio/globals')

class SwagLoginPage{
    /**
     * Login Page selectors
     */
    get inputUsername () {
        return $("//input[@id ='user-name']");
    }

    get inputPassword () {
        return $("//input[@id ='password']");
    }

    get btnSubmit () {
        return $("//input[@value='LOGIN']");
    }

    /**
        Login Page methods
     */
    async swgLogin (username, password) {
        await browser.url("https://www.saucedemo.com/v1/index.html")
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

}

module.exports = new SwagLoginPage();
