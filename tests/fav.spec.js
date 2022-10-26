const { test, expect } = require('@playwright/test');
const { limehdUrl } = require('./consts/constants');

test.use({ viewport: { width: 1920, height: 1080 } });
test.setTimeout(100000);

test('Тест добавление/удаление каналов из страницы канала без авторизации', async ({ page }) => {

  const response = await page.goto(limehdUrl);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }
  //await page.goto(limehdUrl);

  //добавляем НТВ в избранные, через страницу канала
  await page.locator('text=Телекомпания «НТВ»').click();
  await page.waitForTimeout(1000);
  await page.locator('.stream__favorite-container').click()
  await page.waitForTimeout(1000);
  await page.locator('.login__button-arrow').click();
  await page.waitForTimeout(1000);

  //добавляем ТВ - ЦЕНТР в избранные, через страницу канала
  await page.locator('text=ТВ ЦЕНТР - Москва').click();
  await page.waitForTimeout(1000);
  await page.locator('.stream__favorite-container').click()
  await page.waitForTimeout(1000);
  await page.locator('.login__button-arrow').click();
  await page.waitForTimeout(1000);

  //проверяем, что каналы в избранном
  await page.locator('.favorite__icon').click();
  await expect(page.locator('text=Телекомпания «НТВ»')).toBeVisible();
  await expect(page.locator('text=ТВ ЦЕНТР - Москва')).toBeVisible();
  //done

  //удаляем НТВ из избранных, через страницу канала
  await page.locator('text=Телекомпания «НТВ»').click();
  await page.waitForTimeout(1000);
  await page.locator('.stream__favorite-container').click()
  await page.waitForTimeout(1000);
  await page.locator('.login__button-arrow').click();
  await page.waitForTimeout(1000);
  await page.locator('.favorite__icon').click();
  await page.waitForTimeout(2000);

  //удаляем "ТВ ЦЕНТР - Москва" из избранных, через страницу канала
  await page.locator('text=ТВ ЦЕНТР - Москва').click();
  await page.waitForTimeout(2000);
  await page.locator('.stream__favorite-container').click();
  await page.waitForTimeout(2000);
  await page.locator('.login__button-arrow').click();
  await page.waitForTimeout(5000);
  await page.locator('.favorite__icon').click();

  //проверяем, что избранном есть надпись 'Добавьте каналы в избранное'
  await page.waitForTimeout(5000);
  expect(page.locator('text=Телекомпания «НТВ»')).toBeHidden();
  expect(page.locator('text=ТВ ЦЕНТР - Москва')).toBeHidden();
  expect(page.locator('text=Добавьте каналы в избранное')).toBeVisible();
});


test('Тест добавление/удаление каналов из страницы избранных каналов без авторизации', async ({ page }) => {

  const response = await page.goto(limehdUrl);
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

  //добавляем каналы в избранное из плейлиста
  let i = 0;
  do {
    i++;
    await page.locator('li.channel__item-container:nth-child(' + i + ') > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)').click();
    await page.waitForTimeout(500);
  } while (i < 3);

  //переходим в "Избранное"
  await page.locator('.favorite__icon').click();
  await page.waitForTimeout(3000);

  //удаляем каналы из избранного находясь в плейлисте
  let b = 0;
  do {
    b++;
    await page.locator('.channel__favorite-container').first().click();
    await page.waitForTimeout(500);
    await console.log(b);
  } while (b < 3);

  expect(page.locator('text=Добавьте каналы в избранное')).toBeVisible();
});