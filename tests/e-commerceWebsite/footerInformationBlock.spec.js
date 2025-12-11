import { test, expect} from '@playwright/test';
import { InfoBlockPage } from '../../components/InfoBlockPage.js';

/*test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.opencart.ua/');
});*/


/*const navigateTo = async (page, link) => {
  await page.getByRole('link', { name: link }).click();
};

const checkNavigation = (page, heading) => {
  return page.getByRole('heading', { name: heading });
}

test('checking About Us link', async ({ page }) => {
  await navigateTo(page, 'Про нас');
  await expect(checkNavigation(page, 'Про нас')).toBeVisible();
});

test('checking Delivery link', async ({ page }) => {
  await navigateTo(page, 'Доставка');
  await expect(checkNavigation(page, 'Доставка')).toBeVisible();
});

test('checking Private Policy link', async ({ page }) => {
  await navigateTo(page, 'Політика конфіденційності');
  await expect(checkNavigation(page, 'Політика конфіденційності')).toBeVisible();
});

test('checking Terms and Condition link', async ({ page }) => {
  await navigateTo(page, 'Правила та умови');
  await expect(checkNavigation(page, 'Правила та умови')).toBeVisible();
});*/

// infoBlock.spec.js



test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.opencart.ua/');
});

test('checking About Us link', async ({ page }) => {
  const infoBlock = new InfoBlockPage(page);
  await infoBlock.navigateTo('Про нас');
  await expect(infoBlock.getHeading('Про нас')).toBeVisible();
});

test('checking Delivery link', async ({ page }) => {
  const infoBlock = new InfoBlockPage(page);
  await infoBlock.navigateTo('Доставка');
  await expect(infoBlock.getHeading('Доставка')).toBeVisible();
});

test('checking Private Policy link', async ({ page }) => {
  const infoBlock = new InfoBlockPage(page);
  await infoBlock.navigateTo('Політика конфіденційності');
  await expect(infoBlock.getHeading('Політика конфіденційності')).toBeVisible();
});

test('checking Terms and Condition link', async ({ page }) => {
  const infoBlock = new InfoBlockPage(page);
  await infoBlock.navigateTo('Правила та умови');
  await expect(infoBlock.getHeading('Правила та умови')).toBeVisible();
});