const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to https://dou.ua/
  await page.goto('https://dou.ua/');

  // Click text=Форум
  await page.click('text=Форум');
  expect(page.url()).toBe('https://dou.ua/forums/');

  // Click text=Стандарт WCAG для тестувальників: 1.1. Text Alternatives
  await page.click('text=Стандарт WCAG для тестувальників: 1.1. Text Alternatives');
  expect(page.url()).toBe('https://dou.ua/forums/topic/34828/?from=fortech');

  // Click text=Как тестировать перемещение средств пользователя на криптобирже
  await page.click('text=Как тестировать перемещение средств пользователя на криптобирже');
  expect(page.url()).toBe('https://dou.ua/lenta/columns/moving-of-user-funds-on-crypto-exchange/?from=similar_posts_tech');

  // Click text=Oleksandr Pelykh
  await page.click('text=Oleksandr Pelykh');
  expect(page.url()).toBe('https://dou.ua/users/alexandr-pelih/');

  // Click text=Коментарі
  await page.click('text=Коментарі');
  expect(page.url()).toBe('https://dou.ua/users/alexandr-pelih/activities/');

  // Click text=Статті
  await page.click('text=Статті');
  expect(page.url()).toBe('https://dou.ua/users/alexandr-pelih/articles/');

  // Click text=Відгуки
  await page.click('text=Відгуки');
  expect(page.url()).toBe('https://dou.ua/users/alexandr-pelih/feedbacks/');

  // Click text=Головна Форум Стрічка Зарплати Робота Календар 👍👎 Оцініть свою компанію >> a
  await page.click('text=Головна Форум Стрічка Зарплати Робота Календар 👍👎 Оцініть свою компанію >> a');
  expect(page.url()).toBe('https://dou.ua/');

});