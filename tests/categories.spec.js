const { test, expect } = require('@playwright/test');
const { limehdUrl } = require('./consts/constants');

test.setTimeout(60000);
test.use({ viewport: { width: 1920, height: 1080 } });

test('Тест переключение между категориями каналов', async ({ page }) => {

    await page.goto(limehdUrl)
    await page.waitForTimeout(6000);
    await page.locator('text=Избранные').click();
    await expect(page.locator('text=Добавьте каналы в избранное')).toBeVisible({ timeout: 3000 });
    await page.waitForTimeout(1000);

    //TODO: временно отключаю т.к. очень долгие ответы от GET-ADS - ждем изменения со стороны бэка
    // await page.locator('text=Популярные').click();
    // await expect(page.locator('h3:has-text("Россия 1")')).toBeVisible({ timeout: 10000 });
    // await expect(page.locator('h3:has-text("Первый канал")')).toBeVisible({ timeout: 3000 });
    // await page.waitForTimeout(1000);

    // await page.locator('text=Все').first().click();
    // await expect(page.locator('h3:has-text("Россия 1")')).toBeVisible({ timeout: 10000 });
    // await expect(page.locator('h3:has-text("Первый канал")')).toBeVisible({ timeout: 3000 });
    // await page.waitForTimeout(1000);

    await page.locator('text=Региональные').first().click();
    await expect(page.locator('h3:has-text("VOSTOK")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("БСТ (УФА)")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("Россия 1")')).toBeHidden();
    await expect(page.locator('h3:has-text("Первый канал")')).toBeHidden();
    await page.waitForTimeout(1000);

    await page.locator('text=Развлечения').first().click();
    await expect(page.locator('h3:has-text("Охота и рыбалка")')).toBeVisible({ timeout: 3000 });;
    await expect(page.locator('h3:has-text("УСАДЬБА")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("Россия 1")')).toBeHidden();
    await expect(page.locator('h3:has-text("Первый канал")')).toBeHidden();
    await page.waitForTimeout(1000);


    await page.locator('text=Спорт').first().click();
    await expect(page.locator('h3:has-text("Матч! Страна")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("Матч! Боец")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("Россия 1")')).toBeHidden();
    await expect(page.locator('h3:has-text("Первый канал")')).toBeHidden();
    await page.waitForTimeout(1000);

    await page.locator('text=Детям').first().click();
    await expect(page.locator('h3:has-text("Канал DISNEY")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("МУЛЬТИЛАНДИЯ")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("Россия 1")')).toBeHidden();
    await expect(page.locator('h3:has-text("Первый канал")')).toBeHidden();
    await page.waitForTimeout(1000);

    await page.locator('text=Музыка').first().click();
    await expect(page.locator('h3:has-text("VOSTOK")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("МУЗСОЮЗ")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("Россия 1")')).toBeHidden();
    await expect(page.locator('h3:has-text("Первый канал")')).toBeHidden();
    await page.waitForTimeout(1000);

    await page.locator('text=Новости').first().click();
    await expect(page.locator('h3:has-text("КРИК ТВ")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("ИЗВЕСТИЯ")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("МУЗСОЮЗ")')).toBeHidden();
    await expect(page.locator('h3:has-text("VOSTOK")')).toBeHidden();
    await page.waitForTimeout(1000);

    await page.locator('text=Познавательные').first().click();
    await expect(page.locator('h3:has-text("Здоровое ТВ")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("ZOOПАРК")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("МУЗСОЮЗ")')).toBeHidden();
    await expect(page.locator('h3:has-text("VOSTOK")')).toBeHidden();
    await page.waitForTimeout(1000);

    await page.locator('text=Фильмы').first().click();
    await expect(page.locator('h3:has-text("Киносезон")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("Киносерия")')).toBeVisible({ timeout: 3000 });
    await expect(page.locator('h3:has-text("МУЗСОЮЗ")')).toBeHidden();
    await expect(page.locator('h3:has-text("VOSTOK")')).toBeHidden();
    await expect(page.locator('h3:has-text("Россия 1")')).toBeHidden();
    await expect(page.locator('h3:has-text("Первый канал")')).toBeHidden();
});