const {test, expect} = require ('@playwright/test');

// test ('Open page', async ({page}) => {
//     await page.goto ('https://google.com')
// })

test('Check dou main page', async ({ page }) => {
    await page.goto('https://dou.ua')
    const title = page.locator('head title');
    await expect(title).toHaveText('Спільнота програмістів | DOU');
})