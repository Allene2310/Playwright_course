import {test, expect} from '@playwright/test';

test('Testing multiple elements on the page', async ({page}) => {
  await page.goto('https://demo.opencart.ua');
  
  /*  // Get all images on the main page and print their alt text
  const images = await page.$$('img');
    for (const img of images) {

        const imgAltText = await img.getAttribute('alt');
        console.log(imgAltText);
    }*/

    // Get all product names on the main page
    page.waitForSelector('//div[@id="content"]//div[@class="row"]//div//h4/a');
    const product = await page.$$('//div[@id="content"]//div[@class="row"]//div//h4/a')
        for (const item of product) {
            const itemText = await item.textContent();
            console.log(itemText);
        }

});