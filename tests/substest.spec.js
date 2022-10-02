const { test, expect } = require('@playwright/test')

test.setTimeout(4000)

const start = 'https://limehd.tv/subscribes/141'
const kinomir = 'https://limehd.tv/subscribes/134'
const razvl = 'https://limehd.tv/subscribes/10'
const matchprem = 'https://limehd.tv/subscribes/84'
const nastrkino = 'https://limehd.tv/subscribes/110'
const sport = 'https://limehd.tv/subscribes/4'
const khl = 'https://limehd.tv/subscribes/105'
const matchfootbol = 'https://limehd.tv/subscribes/85'
const base = 'https://limehd.tv/subscribes/113'
const tvsinema = 'https://limehd.tv/subscribes/51'
const hd = 'https://limehd.tv/subscribes/25'
const porno = 'https://limehd.tv/subscribes/83'
const reklodin = 'https://limehd.tv/subscribes/169'
const rekltri = 'https://limehd.tv/subscribes/190'
const reklshest = 'https://limehd.tv/subscribes/197'

test('Тест окна подписки START', async ({ page }) => {

    const response = await page.goto(start);
    if (response.status() > 399) {
      throw new Error(`Failed with response code ${response.status()}`)
    }

});

test('Тест окна подписки Киномир', async ({ page }) => {

  const response = await page.goto(kinomir);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки Развлекательный', async ({ page }) => {

  const response = await page.goto(razvl);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки  Матч! Премьер ', async ({ page }) => {

  const response = await page.goto(matchprem);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки Настрой кино', async ({ page }) => {

  const response = await page.goto(nastrkino);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки Спорт', async ({ page }) => {

  const response = await page.goto(sport);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки КХЛ', async ({ page }) => {

  const response = await page.goto(khl);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки  Матч! Футбол ', async ({ page }) => {

  const response = await page.goto(matchfootbol);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки Базовый', async ({ page }) => {

  const response = await page.goto(base);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки ТВ-синема ', async ({ page }) => {

  const response = await page.goto(tvsinema);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки HD', async ({ page }) => {

  const response = await page.goto(hd);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки  18+', async ({ page }) => {

  const response = await page.goto(porno);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки Отключение рекламы на 1 месяц', async ({ page }) => {

  const response = await page.goto(reklodin);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки  Отключение рекламы на 3 месяца', async ({ page }) => {

  const response = await page.goto(rekltri);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

});

test('Тест окна подписки  Отключение рекламы на 6 месяцев', async ({ page }) => {

  const response = await page.goto(reklshest);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }
 
});

