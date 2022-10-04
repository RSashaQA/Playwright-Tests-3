const { test, expect } = require('@playwright/test');

test.use({ viewport: { width: 1920, height: 1080 } });
test.setTimeout(10000);

test('Тест смена вкладок, ТВ-каналы', async ({ page }) => {

    //нажимаем на вкладку ТВ-каналы, прорверяем, что страница доступна
    const response = await page.goto('https://limehd.tv/', { waitUntil: "commit" });
    if (response.status() > 399) {
        throw new Error(`Failed with response code ${response.status()}`)
    }
    //видны каналы
    await expect(page.locator('text=Первый канал')).toBeVisible();
    await expect(page.locator('text=ТЕЛЕКОМПАНИЯ')).toBeVisible();
    await expect(page.locator('text=ПЕТЕРБУРГ - 5 КАНАЛ')).toBeVisible();
});

test('Тест смена вкладок, Кино', async ({ page, browserName }) => {

    //прорверяем, что страница VOD доступна
    const response = await page.goto('https://limehd.tv/movies', { waitUntil: "commit" });
    if (response.status() > 399) {
        throw new Error(`Failed with response code ${response.status()}`)
    }


    if (browserName == 'webkit') {
    }
    if (browserName == 'chromium') {
        await expect(page.locator('text=Популярное')).toBeVisible();
    }
    if (browserName == 'firefox') {
        await expect(page.locator('text=Популярное')).toBeVisible();
    }

});


test('Тест смена вкладок, Подписки', async ({ page }) => {
    
    //прорверяем, что страница Подписок доступна
    const response = await page.goto('https://limehd.tv/subscribes', { waitUntil: "commit" });
    if (response.status() > 399) {
        throw new Error(`Failed with response code ${response.status()}`)
    }

    await expect(page.locator('text=Выберите и оплатите подписку.')).toBeVisible();

    // //проверяем, что на странице есть текст "о подписках"
    // const packsPage1 = await page.innerText('div > .default__layout > .packs__container > .form__apps > p:nth-child(1)');
    // expect(packsPage1).toBe('Выберите и оплатите подписку.');
    // const packsPage2 = await page.innerText('div > .default__layout > .packs__container > .form__apps > p:nth-child(2)');
    // expect(packsPage2).toBe('Авторизуйтесь в приложении или на смарт-тв для просмотра на всех устройствах');
});