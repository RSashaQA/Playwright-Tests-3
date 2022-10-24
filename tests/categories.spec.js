const { test, expect } = require('@playwright/test');
const { promises } = require('fs-extra');

test.use({ viewport: { width: 1920, height: 1080 } });

test('Тест переключение между категориями каналов', async ({ page }) => {

    await page.goto('https://limehd.tv/tv')

    await page.locator('text=Избранные').click();
    await expect(page.locator('text=Добавьте каналы в избранное')).toBeVisible();
    await page.waitForTimeout(1000);

    await page.locator('text=Популярные').click();
    await expect(page.locator('text=Россия 1')).toBeVisible({timeout:10000});
    await expect(page.locator('text=Первый канал')).toBeVisible();
    await page.waitForTimeout(1000);

    await page.locator('text=Все').first().click();
    await expect(page.locator('text=Россия 1')).toBeVisible({timeout:10000});
    await expect(page.locator('text=Первый канал')).toBeVisible();
    await page.waitForTimeout(1000);

    await page.locator('text=Региональные').first().click();
    await expect(page.locator('text=VOSTOK')).toBeVisible({timeout:10000});
    await expect(page.locator('text=БСТ (УФА)')).toBeVisible(); 
    await expect(page.locator('text=Россия 1')).toBeHidden();
    await expect(page.locator('text=Первый канал')).toBeHidden();
    await page.waitForTimeout(1000);

    await page.locator('text=Развлечения').first().click();
    await expect(page.locator('text=ОХОТА И РЫБАЛКА')).toBeVisible({timeout:10000});
    await expect(page.locator('text=УСАДЬБА')).toBeVisible(); 
    await expect(page.locator('text=Россия 1')).toBeHidden();
    await expect(page.locator('text=Первый канал')).toBeHidden();
    await page.waitForTimeout(1000);


    await page.locator('text=Спорт').first().click();
    await expect(page.locator('text=Матч! Страна')).toBeVisible({timeout:10000});
    await expect(page.locator('text=Матч! Боец')).toBeVisible(); 
    await expect(page.locator('text=Россия 1')).toBeHidden();
    await expect(page.locator('text=Первый канал')).toBeHidden();

    await page.waitForTimeout(1000);

    await page.locator('text=Детям').first().click();
    await expect(page.locator('text=Канал DISNEY')).toBeVisible({timeout:10000});
    await expect(page.locator('text=МУЛЬТИЛАНДИЯ')).toBeVisible(); 
    await expect(page.locator('text=Россия 1')).toBeHidden();
    await expect(page.locator('text=Первый канал')).toBeHidden();

    await page.waitForTimeout(1000);

    await page.locator('text=Музыка').first().click();
    await expect(page.locator('text=VOSTOK')).toBeVisible({timeout:10000});
    await expect(page.locator('text=МУЗСОЮЗ')).toBeVisible(); 
    await expect(page.locator('text=Россия 1')).toBeHidden();
    await expect(page.locator('text=Первый канал')).toBeHidden();

    await page.waitForTimeout(1000);

    await page.locator('text=Новости >> nth=0').first().click();
    await expect(page.locator('text=КРИК ТВ')).toBeVisible({timeout:10000});
    await expect(page.locator('text=ИЗВЕСТИЯ')).toBeVisible(); 
    await expect(page.locator('text=МУЗСОЮЗ')).toBeHidden();
    await expect(page.locator('text=VOSTOK')).toBeHidden();

    await page.waitForTimeout(1000);

    await page.locator('text=Познавательные').first().click();
    await expect(page.locator('text=Здоровое ТВ')).toBeVisible({timeout:10000});
    await expect(page.locator('text=ZOOПАРК')).toBeVisible(); 
    await expect(page.locator('text=МУЗСОЮЗ')).toBeHidden();
    await expect(page.locator('text=VOSTOK')).toBeHidden();

    await page.waitForTimeout(1000);

    await page.locator('text=Фильмы').first().click();
    await expect(page.locator('text=Киносезон')).toBeVisible({timeout:10000});
    await expect(page.locator('text=Киносерия')).toBeVisible(); 
    await expect(page.locator('text=МУЗСОЮЗ')).toBeHidden();
    await expect(page.locator('text=VOSTOK')).toBeHidden();
    await expect(page.locator('text=Россия 1')).toBeHidden();
    await expect(page.locator('text=Первый канал')).toBeHidden();
});