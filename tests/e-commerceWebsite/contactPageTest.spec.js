import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.opencart.ua/');
  const contactPageURL = page.locator('//i[contains(@class,"fa-phone")]/..');
  await contactPageURL.click();
});





test('should display the Contact page', async ({ page }) => {
  await expect (page).toHaveURL(/information\/contact/);
});

test('Should display key elements on the Contact page', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Контакти' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Наше розміщення' })).toBeVisible();
  await expect(page.getByText('Форма зв`язку')).toBeVisible();
});

test('Should submit contact form and navigate to success page', async ({ page }) => {
  await page.getByRole('textbox', { name: '* Ваше ім`я' }).fill('Olena');
  await page.getByRole('textbox', { name: '* E-Mail' }).fill('l.example@gmail.com');
  await page.getByRole('textbox', { name: '* Запит' }).fill('Some message with more than 10 characters.');
  await page.getByRole('button', { name: 'Підтвердити' }).click();
  await expect (page).toHaveURL(/information\/contact\/success/);
  await expect(page.getByText('Ваш запит був успішно відправлений до адміністрації магазину!')).toBeVisible();
});

test('Should show error for too short message in Request field', async ({ page }) => {
  await page.getByRole('textbox', { name: '* Ваше ім`я' }).fill('Olena');
  await page.getByRole('textbox', { name: '* E-Mail' }).fill('l.example@gmail.com');
  await page.getByRole('textbox', { name: '* Запит' }).fill('Some text');
  await page.getByRole('button', { name: 'Підтвердити' }).click();
  await expect(page.getByText('Запит повинен містити від 10 до 3000 символів!')).toBeVisible();
  await expect (page).not.toHaveURL(/information\/contact\/success/);
});