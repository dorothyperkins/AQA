const { chromium } = require('playwright');
const expect = require('expect');

beforeAll(async () => {
    browser = await chromium.launch();
})
afterAll(async () => {
    await browser.close();
})
beforeEach(async () => {
    page = await browser.newPage();
})
afterEach(async () => {
    await page.close();
})

describe('Test main page', () => {
    it('Open main page', async () => {
        await page.goto('https://dou.ua')
        expect(await page.title()).toBe('Спільнота програмістів | DOU')
    })
})