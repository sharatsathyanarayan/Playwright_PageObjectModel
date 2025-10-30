exports.HomePage =
    class HomePage {

        constructor(page) {
            this.page = page;
            this.product = "//button[@data-test='add-to-cart-sauce-labs-backpack']";
        }

        async addProductToCart() {
            await this.page.locator(this.product).click();
        }

    }