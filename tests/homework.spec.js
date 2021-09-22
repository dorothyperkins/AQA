// const { test, expect } = require('@playwright/test');
// test('test', async ({ page }) => {
//   // Go to https://dou.ua/
//   await page.goto('https://dou.ua/');
//   // Click text=Головна
//   await page.click('text=Головна');
//   expect(page.url()).toBe('https://dou.ua/');
//   // Click [placeholder="пошук"]
//   await page.click('[placeholder="пошук"]');
//   // Fill [placeholder="пошук"]
//   await page.fill('[placeholder="пошук"]', 'js');
//   // Press Enter
//   await page.press('[placeholder="пошук"]', 'Enter');
//   expect(page.url()).toBe('https://dou.ua/search/?q=js');
//   // Click a[role="button"]:has-text("×")
//   await page.click('a[role="button"]:has-text("×")');
//   // Click text=Головна Форум Стрічка Зарплати Робота Календар 👍👎 Оцініть свою компанію >> a
//   await page.click('text=Головна Форум Стрічка Зарплати Робота Календар 👍👎 Оцініть свою компанію >> a');
//   expect(page.url()).toBe('https://dou.ua/');
// });