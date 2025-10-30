exports.LoginPage =
    class LoginPage {

        constructor(page) {
            this.page = page;
            this.loginUrl = "https://www.saucedemo.com/";
            this.userName = "//input[@data-test='username']";
            this.password = "//input[@data-test='password']";
            this.button = "//input[@data-test='login-button']";
        }

        async goToLoginPage() {
            await this.page.goto('https://www.saucedemo.com/');
        }

        async loginToPage(userName, password) {

            await this.page.locator(this.userName).fill(userName)
            await this.page.locator(this.password).fill(password)
            await this.page.locator(this.button).click()
        }




    }