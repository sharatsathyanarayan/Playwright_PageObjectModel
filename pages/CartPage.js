exports.CartPage =
    class CartPage {
        /**
       * @param {import('@playwright/test').Page} page
       */
        constructor(page) {
            this.page = page;
            this.cartlink = "//a[@data-test='shopping-cart-link']";
            this.productName = "//div[@data-test='inventory-item-name']";
            this.productPrice = "//div[@data-test='inventory-item-price']";
        }

        async goToCartPage() {
            const title = await this.page.locator(this.cartlink).click()
            console.log('Cart page title:', title);
        }

        async validateProductNameAndPrice(productName, Price) {
            const pName = await this.page.locator(this.productName).textContent()
            console.log('Product name in cart:', pName);
            const pPrice = await this.page.locator(this.productPrice).textContent()
            console.log('Product price in cart:', pPrice);


            if ((pName === productName) && (pPrice === Price)) {
                return true;
            } else {
                return false;
            }


        }


    } 
