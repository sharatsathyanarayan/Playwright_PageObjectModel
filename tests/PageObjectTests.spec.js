import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';



test('pageobjectcase', async ({ page }) => {

    //login page

    const login = new LoginPage(page)
    await login.goToLoginPage();
    await login.loginToPage('standard_user', 'secret_sauce');
    await page.waitForTimeout(3000);


    //home page

    const homePage = new HomePage(page)
    await homePage.addProductToCart();
    await page.waitForTimeout(3000);


    //cart page

    const cartPage = new CartPage(page)
    cartPage.goToCartPage()
    await page.waitForTimeout(2000);
    const status = cartPage.validateProductNameAndPrice('Sauce Labs Backpack', '$29.99')
    expect(await status).toBe(true)
});