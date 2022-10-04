const { test, expect } = require('@playwright/test');
const { promises } = require('fs-extra');

test.setTimeout(120000)

test('Тест переключение между категориями каналов', async ({ page }) => {
    await page.goto('https://limehd.tv/tv')

    await page.locator('text=Избранные').click();
    await expect(page.waitForSelector('text=Добавьте каналы в избранное')).toBeVisible();
    await page.waitForTimeout(1000);

    await page.locator('text=Популярные').click();
    await expect(page.locator('text=Россия 1')).toBeVisible();
    await expect(page.locator('text=Первый канал')).toBeVisible();
    await page.waitForTimeout(1000);

    await page.locator('text=Все').first().click();
    await expect(page.locator('text=Россия 1')).toBeVisible();
    await expect(page.locator('text=Первый канал')).toBeVisible();
    await page.waitForTimeout(1000);

    await page.locator('text=Региональные').first().click();
    await expect(page.locator('text=VOSTOK')).toBeVisible();
    await expect(page.locator('text=БТС (УФА)')).toBeVisible(); 
    await expect(page.locator('text=Россия 1')).toBeHidden();
    await expect(page.locator('text=Первый канал')).toBeHidden();

    await page.waitForTimeout(1000);

    await page.locator('text=Развлечения').first().click();
    await page.waitForSelector('text=Пятница!');
    await page.waitForTimeout(1000);

    await page.locator('text=Спорт').first().click();
    await page.waitForSelector('text=Матч! Боец');
    await page.waitForTimeout(1000);

    await page.locator('text=Детям').first().click();
    await page.waitForSelector('text=Карусель');
    await page.waitForTimeout(1000);

    await page.locator('text=Музыка').first().click();
    await page.waitForSelector('text=Муз-тв');
    await page.waitForTimeout(1000);

    await page.locator('text=Новости >> nth=0').first().click();
    await page.waitForSelector('text=Rt');
    await page.waitForTimeout(1000);

    await page.locator('text=Познавательные').first().click();
    await page.waitForSelector('text=Егэ');
    await page.waitForTimeout(1000);

    await page.locator('text=Фильмы').first().click();
    await page.waitForSelector('text=Киноужас');
});