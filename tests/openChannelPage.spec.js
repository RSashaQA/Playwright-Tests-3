const { test, expect } = require('@playwright/test');
const { limehdUrl } = require('./consts/constants');


test.use({ viewport: { width: 1920, height: 1080 } });

test('Тест открытия страницы канала', async ({ page }) => {
    await page.goto(limehdUrl + '/channel/1kanal');
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time')
    await page.waitForSelector('.page-main > .stream__item > .stream__title-container > .stream__favorite-container > .stream__favorite')
    await page.waitForSelector('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.default__layout > .page-main > .stream__item > .current-program__description-container > .button-report')
    const streamName = await page.innerText('.default__layout > .page-main > .stream__item > .stream__title-container > .stream__title');
    expect(streamName).toBe('ПЕРВЫЙ КАНАЛ СМОТРЕТЬ ОНЛАЙН');
});