// const { test, expect } = require('@playwright/test');
// test('test', async ({ page }) => {
//         const browser = await playwright["chromedriver"].launch();
//         const context = await browser.newContext();
//         //const page = await context.newPage('https://dou.ua/');

//         // Go to https://dou.ua/
//         await page.goto('https://dou.ua/');
//         // Click text=Форум
//         await page.click('text=Форум');
//         expect(page.url()).toBe('https://dou.ua/forums/');
//         // Click text=Огляд фреймворків JavaScript. Що, для чого і коли використовувати
//         await page.click('text=Огляд фреймворків JavaScript. Що, для чого і коли використовувати');
//         expect(page.url()).toBe('https://dou.ua/forums/topic/34739/?from=fortech');
// });