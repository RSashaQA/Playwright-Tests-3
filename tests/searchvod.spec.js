const { test, expect } = require('@playwright/test');

test('Тест поиска в VOD с неверным/верным запросом', async ({ page }) => {

    await page.goto('https://limehd.tv/movies');
    
    //ввод в поисковую строку
    await page.locator('[placeholder="Название фильма\\, сериала\\.\\.\\."]').fill('\\\\qwe!@#$%^\\\\\\');
    await page.waitForTimeout(3000);

    //проверяем текст поисковой выдачи
    const searchVodContent = await page.innerText('h3.search-modal__title');
    expect(searchVodContent).toBe('ПО ЗАПРОСУ \\\\QWE!@#$%^\\\\\\ НИЧЕГО НЕ НАЙДЕНО');
    
    //ввод в поисковую строку, преднамеренная опечатка
    await page.locator('[placeholder="Название фильма\\, сериала\\.\\.\\."]').fill('пианистка');

    //проверяем текст поисковой выдачи, переходим на канал
    await page.locator('text=Результаты поиска Пианистка 2022 г, Мелодрамы >> a').click();
    await page.waitForURL('https://limehd.tv/movie/17436-3');

    //сверяем название канала
    const searchVod1 = await page.innerText('h1:has-text("Пианистка")');
    expect(searchVod1).toBe('Пианистка');
})