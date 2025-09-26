import { test, expect } from '@playwright/test';

test('create an order', async ({ page }) => {
  await page.goto('https://demo.opencart.ua/index.php?route=common/home');
  await page.getByText('MacBook').click();
  await page.getByRole('button', { name: 'В кошик' }).click();
  await page.getByRole('link', { name: ' Кошик' }).click();
  await page.getByRole('link', { name: 'Продовжити покупки' }).click();
  await page.getByRole('heading', { name: 'MacBook' }).getByRole('link').click();
  await page.getByRole('button', { name: 'В кошик'  }).click();
  await page.getByRole('link', { name: ' Кошик' }).click();
  await page.getByRole('link', { name: ' Оформлення замовлення' }).click();
  await page.getByRole('textbox', { name: 'E-Mail' }).click();
  await page.getByRole('textbox', { name: 'E-Mail' }).fill('l.example@gmail.com');
  await page.getByRole('textbox', { name: 'Пароль' }).click();
  await page.getByRole('textbox', { name: 'Пароль' }).fill('123456');
  await page.getByRole('button', { name: 'Вхід' }).click();
  await page.getByRole('button', { name: 'Продовжити' }).click();
});