const { test, expect, webkit, chromium, firefox } = require('@playwright/test');
//const { promises } = require('fs-extra');

const userNameFavWebkit = ('testdeletemewebkitfav@test.test');
const userNameFavChromium = ('testdeletemechromiumfav@test.test');
const userNameFavFirefox = ('testdeletemefirefoxfav@test.test');
const passwordFav = ('qqqqqq');

test.setTimeout(120000);

test('Регистрация тестовых аккаунтов, добавление/удаление из избранных.', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/signup');

    //для регистрации в разных браузерах используется свой e-mail
    if (browserName == 'webkit') {
        await page.locator('input[type="email"]').fill(userNameFavWebkit)
    }
    if (browserName == 'chromium') {
        await page.locator('input[type="email"]').fill(userNameFavChromium)
    }
    if (browserName == 'firefox') {
        await page.locator('input[type="email"]').fill(userNameFavFirefox)
    }
    // дальше код исполняется для всех браузеров
    await page.locator('input[type="password"]').first().fill(passwordFav);
    await page.locator('text=Повторите пароль >> input[type="password"]').fill(passwordFav);
    await page.locator('text=Зарегистрироваться').click();
    await page.locator('text=Отлично').click();

    await page.locator('text=ТВ-каналы').click();

    // зайти на первый  канал
    await page.locator('text=Первый канал').click();
    await page.waitForURL('https://limehd.tv/channel/1kanal');

    //добавить в избранное

    await page.waitForTimeout(2000);
    await page.locator('img.stream__favorite').click();
    await page.waitForTimeout(2000);

    // зайти на матч
    await page.locator('text=Телеканал «Матч ТВ»').click();
    await page.waitForURL('https://limehd.tv/channel/match');

    //добавить в избранное    
    await page.waitForTimeout(3000);
    await page.locator('img.stream__favorite').click();
    await page.waitForTimeout(2000);

    //логаут
    await page.hover('div.user__avatar');  //чоткий логаут
    await page.locator('span.user__menu-logout').click();

    //авторизация
    await page.waitForTimeout(1000);
    await page.goto('https://limehd.tv/login');
    await page.waitForURL('https://limehd.tv/login');

    //авторизация в разных браузерах используется свой e-mail
    if (browserName == 'webkit') {
        await page.locator('input[type="email"]').fill(userNameFavWebkit)
    }
    if (browserName == 'chromium') {
        await page.locator('input[type="email"]').fill(userNameFavChromium)
    }
    if (browserName == 'firefox') {
        await page.locator('input[type="email"]').fill(userNameFavFirefox)
    }
    // дальше код исполняется для всех браузеров
    await page.locator('input[type="password"]').fill(passwordFav);
    await page.locator('text=Войти').click();

    //проверка добавленных каналов в избранном - удаление из избранных
    await page.locator('text=Избранные').click();
    await page.waitForTimeout(1000);

    await page.locator('text=Первый канал').click();
    await page.waitForURL('https://limehd.tv/channel/1kanal');
    
    await page.waitForTimeout(2000);
    await page.locator('img.stream__favorite').click();
    await page.waitForTimeout(2000);

    await page.locator('text=Телеканал «Матч ТВ»').click();
    await page.waitForURL('https://limehd.tv/channel/match');

    await page.waitForTimeout(2000);
    await page.locator('img.stream__favorite').click();
    await page.waitForTimeout(2000);

    //логаут - логин
    await page.hover('div.user__avatar');
    await page.locator('span.user__menu-logout').click();

    await page.waitForTimeout(1000);
    await page.goto('https://limehd.tv/login');
    await page.waitForURL('https://limehd.tv/login');

    //авторизация в разных браузерах используется свой e-mail
    if (browserName == 'webkit') {
        await page.locator('input[type="email"]').fill(userNameFavWebkit)
    }
    if (browserName == 'chromium') {
        await page.locator('input[type="email"]').fill(userNameFavChromium)
    }
    if (browserName == 'firefox') {
        await page.locator('input[type="email"]').fill(userNameFavFirefox)
    }

    await page.locator('input[type="password"]').fill(passwordFav);
    await page.locator('text=Войти').click();

    await page.locator('text=Избранные').click();
    await page.waitForTimeout(2000);

    await page.waitForSelector('text=Добавьте каналы в избранное', {timeout: 3000})

    // await page.locator('text=ТВ-каналы').first().click();

    // //добавляем НТВ в избранные, через страницу канала
    // await page.locator('text=НТВ').click();
    // await page.waitForTimeout(2000);
    // await page.locator('.page-main > .stream__item > .stream__title-container > .stream__favorite-container > .stream__favorite').click();
    // await page.waitForTimeout(2000);
    // await page.locator('text=Все телеканалы').click();
    // await page.waitForTimeout(2000);

    // //добавляем ТВ ЦЕНТР в избранные, через страницу канала
    // await page.locator('text=ТВ ЦЕНТР - Москва').click();
    // await page.locator('.page-main > .stream__item > .stream__title-container > .stream__favorite-container > .stream__favorite').click();

    // await page.waitForTimeout(1000)
    // await page.dblclick('div.user__avatar');
    // await page.waitForTimeout(2000)
    // await page.locator('text=Выйти из аккаунта').click();
    // // };

    // // test('Тест добавление/удаление каналов из страницы канала c авторизацией. Часть 2 (авторизация, проверка избранных удаление каналов из избранных)', async ({page, browserName}) => {

    // await page.goto('https://limehd.tv/login');

    // //авторизация в разных браузерах используется свой e-mail
    // if (browserName == 'webkit') {
    //     await page.locator('input[type="email"]').fill(userNameFavWebkit)
    // }
    // if (browserName == 'chromium') {
    //     await page.locator('input[type="email"]').fill(userNameFavChromium)
    // }
    // if (browserName == 'firefox') {
    //     await page.locator('input[type="email"]').fill(userNameFavFirefox)
    // }

    // // дальше код исполняется для всех браузеров
    // await page.locator('input[type="password"]').fill(passwordFav);
    // await page.locator('text=Войти').click();
    // await page.waitForSelector('text=t');

    // //проверяем, что каналы в избранном
    // await page.locator('text=Избранные').click();
    // await page.waitForSelector('text=НТВ', 'text=ТВ ЦЕНТР');

    // //удаляем НТВ и ТВ-ЦЕНТР из избранных, через страницу канала
    // await page.waitForSelector('.channel__item-container:nth-child(2) > .channel-container > .channel__item > .channel__wrapper > .channel__title-container > .channel__title-wrapper > .channel__favorite-container > .channel__favorite')
    // await page.click('.channel__item-container:nth-child(2) > .channel-container > .channel__item > .channel__wrapper > .channel__title-container > .channel__title-wrapper > .channel__favorite-container > .channel__favorite')

    // await page.waitForSelector('.channel__wrapper > .channel__title-container > .channel__title-wrapper > .channel__favorite-container > .channel__favorite')
    // await page.click('.channel__wrapper > .channel__title-container > .channel__title-wrapper > .channel__favorite-container > .channel__favorite')

    // await page.waitForTimeout(2000)
    // await page.locator('header >> text=t').click({ clickCount: 2 });
    // await page.waitForTimeout(2000)
    // await page.locator('text=Выйти из аккаунта').click();

    // await page.goto('https://limehd.tv/login');

    // //авторизация в разных браузерах используется свой e-mail
    // if (browserName == 'webkit') {
    //     await page.locator('input[type="email"]').fill(userNameFavWebkit)
    // }
    // if (browserName == 'chromium') {
    //     await page.locator('input[type="email"]').fill(userNameFavChromium)
    // }
    // if (browserName == 'firefox') {
    //     await page.locator('input[type="email"]').fill(userNameFavFirefox)
    // }
    // // дальше код исполняется для всех браузеров
    // await page.locator('input[type="password"]').fill(passwordFav);
    // await page.locator('text=Войти').click();
    // await page.waitForSelector('text=t');

    // //проверяем, что добавленные ранее каналы в избранном отсутствуют'
    // await page.locator('text=Избранные').click();
    // await page.waitForTimeout(3000)
    // await page.isHidden('text=НТВ', 'text=ТВ ЦЕНТР');
});