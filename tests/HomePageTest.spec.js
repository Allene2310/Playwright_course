import {test, expect} from '@playwright/test';

test('Home page has correct title and url', async ({page}) => {
  await page.goto('https://demo.opencart.ua/');
  await expect(page).toHaveTitle(/OpenCart/);
  await expect(page).toHaveURL('https://demo.opencart.ua/');
  await page.close();
})
