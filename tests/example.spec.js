// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.screenshot({ path: 'screenshots/' + Date.now() + 'HomePage.png' })
  await page.screenshot({ path: 'screenshots/' + Date.now() + 'FullHomePage.png', fullPage: true })
  await page.locator("//img[@alt='Browsers (Chromium, Firefox, WebKit)']").screenshot({ path: 'screenshots/' + Date.now() + 'image.png' })


  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeHidden();
});
