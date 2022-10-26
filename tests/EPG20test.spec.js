const { test, expect } = require('@playwright/test');
const { limehdUrl } = require('./consts/constants');
const programmTime = '.current-program__time';
const noProgramName = 'text=Телепрограмма отсутствует';

test.use({ viewport: { width: 1920, height: 1080 } });

//TODO: сделать через массив

test('проверка наличия ЕПГ на Первом канале', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/1kanal');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на Россия 1', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/rossia1');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на Матч!', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/match');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на НТВ', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/ntv');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на 5 канале', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/5kanal');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на Россия К', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/russiak');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на Россия 24', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/rossia24');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на Карусель', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/karusel');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на ОТР', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/otr');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на ТВЦ', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/tvc');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на РЕН ТВ', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/rentv');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на Спас', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/spas');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на СТС', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/sts');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на Домашний', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/domashniy');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на ТВ-3', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/tv3');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на Пятница', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/pyatnica');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на Звезда', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/zvezda');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на МИР', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/mir');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на ТНТ', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/tnt');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на МУЗ-ТВ', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/muztv');
    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})

test('проверка наличия ЕПГ на МИР-24', async ({ page }) => {

    await page.goto(limehdUrl + '/channel/mir24');

    await expect(page.locator(noProgramName)).toBeHidden();
    await expect(page.locator(programmTime)).toBeVisible();
})