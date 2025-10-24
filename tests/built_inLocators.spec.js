import {test, expect} from '@playwright/test';

test('Testing elements on the page using built-in locators', async ({page}) => {
  await page.goto('https://demo.opencart.ua');

  // whether the logo is present on the page
  const logo = page.getByAltText('Демо магазин OpenCart')
  await expect(logo).toBeVisible();

  // filling out search input field and submitting the search
  const searchInput = page.getByPlaceholder('Пошук');
  await searchInput.fill('iPhone');
  await searchInput.press('Enter');
    
    // verifying that search results are shown
    const searchResults = page.getByText('Продукти, які відповідають критеріям пошуку');
    await expect(searchResults).toBeVisible();

  //choosing the first product from the search results
  await page.getByRole('link', { name: 'iPhone' }).first().click();

  //adding the product to the wishlist
  await page.getByTitle('Додати до списку бажань').click();
  

  //verifying that the error message is shown
    const errorMessage = page.getByText('Ви мусите увійти чи створити обліковий запис', { exact: false });
    await expect(errorMessage).toBeVisible();


  //filling out the quantity field
  await page.getByLabel('Кількість').fill('2');

  //adding the product to the cart
  //await page.locator('#button-cart').click();
    await page.getByRole('button', { name: 'В кошик' }).first().click();

  

    

    
});