import {test, expect} from '@playwright/test';
test('Testing login page using locators', async ({page}) => {
  await page.goto('https://demo.opencart.ua');
  
    // Click on My Account link and choose Login
    await page.locator('//a[@title="Обліковий запис"]').click();
    await page.locator('//a[text()="Вхід"]').click();
    
    // Fill in login form
    await page.locator('#input-email').fill('l.example@gmail.com');
    await page.locator('#input-password').fill('123456');
    
    // Submit login form
    await page.locator('//input[@value="Вхід"]').click();

    //Verify logout link is visible after login
    const ListItemLogoutLink = page.locator('//a[@class="list-group-item"][contains(text(),"Вихід")]');
    
    await expect(ListItemLogoutLink).toBeVisible();

    await page.close();
});