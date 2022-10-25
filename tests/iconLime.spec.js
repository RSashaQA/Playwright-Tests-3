const { test, expect } = require('@playwright/test');
const { limehdUrl } = require('./consts/constants');


test.use({ viewport: { width: 1920, height: 1080 } });

test('Тест нажать на лого Lime - переход на главную сраницу', async ({ page }) => {

    const response = await page.goto(limehdUrl + '/subscribes');
    if (response.status() > 399) {
        throw new Error(`Failed with response code ${response.status()}`)
    }

    await page.locator('.page-logo').first().click();
    await expect(page.locator('text=Смотрите онлайн трансляцию федеральных телеканалов на сайте Лайм HD TV круглосуточно и бесплатно')).toBeVisible();
});