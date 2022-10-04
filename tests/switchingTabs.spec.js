const { test, expect } = require('@playwright/test');

test.use({ viewport: { width: 1920, height: 1080 } });
test.setTimeout(10000);

test('Тест смена вкладок, ТВ-каналы', async ({ page }) => {

    const response = await page.goto('https://limehd.tv/');
    if (response.status() > 399) {
        throw new Error(`Failed with response code ${response.status()}`)
    }
    //нажимаем на вкладку ТВ-каналы, прорверяем, что каналы пристуствуют на странице
    await expect(page.locator('text=Первый канал')).toBeVisible();
    await expect(page.locator('text=ТЕЛЕКОМПАНИЯ')).toBeVisible();
    await expect(page.locator('text=ПЕТЕРБУРГ - 5 КАНАЛ')).toBeVisible();
});

test('Тест смена вкладок, Кино', async ({ page }) => {

    const response = await page.goto('https://limehd.tv/movies');
    if (response.status() > 399) {
        throw new Error(`Failed with response code ${response.status()}`)
    }
    //прорверяем, что страница VOD доступна
    await expect(page.locator('div.movies')).toBeVisible({timeout:3000});
});


test('Тест смена вкладок, Подписки', async ({ page }) => {

    const response = await page.goto('https://limehd.tv/subscribes');
    if (response.status() > 399) {
        throw new Error(`Failed with response code ${response.status()}`)
    }
    //прорверяем, что страница Подписок доступна
    await expect(page.locator('ul.packs__list')).toBeVisible({timeout:3000});

    //проверяем, что на странице есть текст "о подписках"
    const packsPage1 = await page.innerText('div > .default__layout > .packs__container > .form__apps > p:nth-child(1)');
    expect(packsPage1).toBe('Выберите и оплатите подписку.');
    const packsPage2 = await page.innerText('div > .default__layout > .packs__container > .form__apps > p:nth-child(2)');
    expect(packsPage2).toBe('Авторизуйтесь в приложении или на смарт-тв для просмотра на всех устройствах');
});