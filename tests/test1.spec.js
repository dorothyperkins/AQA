const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://dou.ua/
  await page.goto('https://dou.ua/');
  // Click text=Перша робота
  await page.click('text=Перша робота');
  expect(page.url()).toBe('https://jobs.dou.ua/first-job/?from=doufp');
  // Click text=Data Quality Engineering | EPAM University
  await page.click('text=Data Quality Engineering | EPAM University');
  expect(page.url()).toBe('https://dou.ua/calendar/39662/?from=first-job');
  // Click text=ПідуЯ йду
  await page.click('text=ПідуЯ йду');
})