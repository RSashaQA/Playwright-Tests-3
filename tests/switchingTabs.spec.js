const { test, expect } = require('@playwright/test');
const { limehdUrl } = require('./consts/constants');

test.use({ viewport: { width: 1920, height: 1080 } });

test('Тест смена вкладок, ТВ-каналы', async ({ page }) => {
    //нажимаем на вкладку ТВ-каналы, прорверяем, что страница доступна
    const response = await page.goto(limehdUrl);
    if (response.status() > 399) {
        throw new Error(`Failed with response code ${response.status()}`)
    }
    // await page.waitForTimeout(8000);
    await page.locator('span:has-text("ТВ-каналы")').click()
    //видны каналы
    await page.waitForTimeout(8000);
    await expect(page.locator('h3:has-text("Первый канал")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("Телекомпания НТВ")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("Петербург — 5 канал")')).toBeVisible({ timeout: 3000 });
});

test('Тест смена вкладок, Кино', async ({ page, browserName }) => {

    //прорверяем, что страница VOD доступна
    const response = await page.goto(limehdUrl);
    if (response.status() > 399) {
        throw new Error(`Failed with response code ${response.status()}`)
    }
    // await page.waitForTimeout(8000);
    await page.locator('span:has-text("Кино")').click()
    if (browserName == 'webkit') {
    }
    if (browserName == 'chromium') {
        await expect(page.locator('.movies')).toBeVisible();
    }
    if (browserName == 'firefox') {
        await expect(page.locator('.movies')).toBeVisible();
    }
});

test('Тест смена вкладок, Подписки', async ({ page }) => {

    //прорверяем, что страница Подписок доступна
    const response = await page.goto(limehdUrl);
    if (response.status() > 399) {
        throw new Error(`Failed with response code ${response.status()}`)
    }
    // await page.waitForTimeout(8000);
    await page.locator('header ul >> text=Подписки').click()
    await expect(page.locator('.packs__list')).toBeVisible();
});