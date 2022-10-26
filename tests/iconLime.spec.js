const { test, expect } = require('@playwright/test');
const { limehdUrl } = require('./consts/constants');

test('Тест нажать на лого Lime - переход на главную сраницу', async ({ page }) => {

    const response = await page.goto(limehdUrl + '/subscribes');
    if (response.status() > 399) {
        throw new Error(`Failed with response code ${response.status()}`)
    }
    //Переходим категорию "подписки"
    await page.locator('header ul >> text=Подписки').click();
    await expect(page.locator('.packs__list')).toBeVisible();
    await page.waitForTimeout(2000);

    //Нажимаем на лого "Лайм" - ожидаем переход на главную страницу
    await page.locator('.page-logo').first().click();
    await expect(page.locator('.channel__list-container')).toBeVisible();
});