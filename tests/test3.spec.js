const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to https://dou.ua/
  await page.goto('https://dou.ua/');

  // Click text=Топ-50
  await page.click('text=Топ-50');
  expect(page.url()).toBe('https://dou.ua/lenta/articles/top-50-summer-2021/?from=doufp');

  // Click text=Редакція DOU
  await page.click('text=Редакція DOU');
  expect(page.url()).toBe('https://dou.ua/users/dou-editors/');

  // Click text=👍👎 Оцініть свою компанію
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text=👍👎 Оцініть свою компанію')
  ]);

  // Go to https://jobs.dou.ua/poll/
  await page1.goto('https://jobs.dou.ua/poll/');

  // Click text=Вакансії
  await page1.click('text=Вакансії');
  expect(page1.url()).toBe('https://jobs.dou.ua/');

  // Click text=Python Automation Engineer
  await page1.click('text=Python Automation Engineer');
  expect(page1.url()).toBe('https://jobs.dou.ua/companies/plvision/vacancies/118476/?from=rs');

  // Click text=Firmware Python Verification Engineer
  await page1.click('text=Firmware Python Verification Engineer');
  expect(page1.url()).toBe('https://jobs.dou.ua/companies/plvision/vacancies/176962/?from=widget_similar');

  // Click text=Всі вакансії компанії
  await page1.click('text=Всі вакансії компанії');
  expect(page1.url()).toBe('https://jobs.dou.ua/companies/plvision/vacancies/');

  // Click text=plvision.eu
  const [page2] = await Promise.all([
    page1.waitForEvent('popup'),
    page1.click('text=plvision.eu')
  ]);

});