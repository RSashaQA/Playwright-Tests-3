const { test, expect } = require('@playwright/test')
const { limehdUrl } = require('./consts/constants');

test.use({ viewport: { width: 1920, height: 1080 } });


const start = limehdUrl + '/subscribes/141'
const kinomir = limehdUrl + '/subscribes/134'
const razvl = limehdUrl + '/subscribes/10'
const matchprem = limehdUrl + '/subscribes/84'
const nastrkino = limehdUrl + '/subscribes/110'
const sport = limehdUrl + '/subscribes/4'
const khl = limehdUrl + '/subscribes/105'
const matchfootbol = limehdUrl + '/subscribes/85'
const base = limehdUrl + '/subscribes/113'
const tvsinema = limehdUrl + '/subscribes/51'
const hd = limehdUrl + '/subscribes/25'
const porno = limehdUrl + '/subscribes/83'
const reklodin = limehdUrl + '/subscribes/169'
const rekltri = limehdUrl + '/subscribes/190'
const reklshest = limehdUrl + '/subscribes/197'

test('Тест окна подписки START', async ({ page }) => {

    const response = await page.goto(start, {waitUntil: "commit"});
    if (response.status() > 399) {
      throw new Error(`Failed with response code ${response.status()}`)
    }

});

test('Тест окна подписки Киномир', async ({ page }) => {

  const response = await page.goto(kinomir, {waitUntil: "commit"});
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки Развлекательный', async ({ page }) => {

  const response = await page.goto(razvl, {waitUntil: "commit"});
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки  Матч! Премьер ', async ({ page }) => {

  const response = await page.goto(matchprem, {waitUntil: "commit"});
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки Настрой кино', async ({ page }) => {

  const response = await page.goto(nastrkino, {waitUntil: "commit"});
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки Спорт', async ({ page }) => {

  const response = await page.goto(sport, {waitUntil: "commit"});
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки КХЛ', async ({ page }) => {

  const response = await page.goto(khl, {waitUntil: "commit"});
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки  Матч! Футбол ', async ({ page }) => {

  const response = await page.goto(matchfootbol, {waitUntil: "commit"});
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки Базовый', async ({ page }) => {

  const response = await page.goto(base, {waitUntil: "commit"});
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки ТВ-синема ', async ({ page }) => {

  const response = await page.goto(tvsinema, {waitUntil: "commit"});
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки HD', async ({ page }) => {

  const response = await page.goto(hd, {waitUntil: "commit"});
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки  18+', async ({ page }) => {

  const response = await page.goto(porno, {waitUntil: "commit"});
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки Отключение рекламы на 1 месяц', async ({ page }) => {

  const response = await page.goto(reklodin, {waitUntil: "commit"});
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки  Отключение рекламы на 3 месяца', async ({ page }) => {

  const response = await page.goto(rekltri, {waitUntil: "commit"});
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки  Отключение рекламы на 6 месяцев', async ({ page }) => {

  const response = await page.goto(reklshest, {waitUntil: "commit"});
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }
 
});