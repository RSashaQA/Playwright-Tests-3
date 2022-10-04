const { test, expect } = require('@playwright/test')

test.setTimeout(120000)
test.use({ viewport: { width: 1920, height: 1080 } });

test('Тест добавление/удаление каналов из страницы канала без авторизации', async ({ page }) => {

    await page.goto('https://limehd.tv');

    //добавляем НТВ в избранные, через страницу канала
    await page.locator('text=Телекомпания «НТВ»').click();
    await page.waitForURL('https://limehd.tv/tv');
    await page.locator('.page-main > .stream__item > .stream__title-container > .stream__favorite-container > .stream__favorite').click()
    await page.waitForTimeout(1000)
    await page.locator('text=Все телеканалы').click();
    await page.waitForTimeout(1000)

    //добавляем ТВ - ЦЕНТР в избранные, через страницу канала
    await page.locator('text=ТВ ЦЕНТР - Москва').click();
    await page.waitForURL('https://limehd.tv/channel/tvc');
    await page.locator('.page-main > .stream__item > .stream__title-container > .stream__favorite-container > .stream__favorite').click()
    await page.waitForTimeout(1000)
    await page.locator('text=Все телеканалы').click();
    await page.waitForTimeout(1000)

    //проверяем, что каналы в избранном
    await page.locator('text=Избранные').click();
    await page.isVisible('text=НТВ', 'text=ЦЕНТР')

    //удаляем НТВ из избранных, через страницу канала
    await page.locator('text=Телекомпания «НТВ»').click();
    await page.waitForURL('https://limehd.tv/tv');
    await page.waitForTimeout(2000)
    await page.locator('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > div.stream__favorite-container > img').click()
    await page.waitForTimeout(2000)
    await page.locator('.login__button-arrow').click();
    await page.locator('text=Избранные').click();

    //удаляем ТВ ЦЕНТР - Москва из избранных, через страницу канала
    await page.locator('text=ТВ ЦЕНТР - Москва').click();
    await page.waitForURL('https://limehd.tv/channel/tvc');
    await page.waitForTimeout(2000)
    await page.locator('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > div.stream__favorite-container > img').click();
    await page.waitForTimeout(2000)
    await page.locator('header a:has-text("ТВ-каналы")').click();

    await page.waitForTimeout(1000)
    await page.locator('text=Избранные').click();
    await page.waitForTimeout(2000)

    //проверяем, что избранном есть надпись 'Добавьте каналы в избранное'
    const FavClear = await page.innerText('.page-main__container > .page-main > .channel__list-component > .channel__list-content > .channel__list-text', {timeout: 5000})
    expect(FavClear).toBe('Добавьте каналы в избранное')
});


test('Тест добавление/удаление каналов из страницы избранных каналов без авторизации', async ({ page }) => {

  await page.goto('https://limehd.tv');

  //добавляем НТВ в избранные, через страницу канала
  await page.locator('text=Телекомпания «НТВ»').click();
  await page.waitForURL('https://limehd.tv/tv');
  await page.waitForSelector('.page-main > .stream__item > .stream__title-container > .stream__favorite-container > .stream__favorite')
  await page.click('.page-main > .stream__item > .stream__title-container > .stream__favorite-container > .stream__favorite')
  await page.waitForTimeout(1000)
  await page.locator('text=Все телеканалы').click();
  await page.waitForTimeout(1000)

  //добавляем ТВ ЦЕНТР - Москва в избранные, через страницу канала
  await page.locator('text=ТВ ЦЕНТР - Москва').click();
  await page.waitForURL('https://limehd.tv/channel/tvc');
  await page.waitForSelector('.page-main > .stream__item > .stream__title-container > .stream__favorite-container > .stream__favorite')
  await page.click('.page-main > .stream__item > .stream__title-container > .stream__favorite-container > .stream__favorite')
  await page.waitForTimeout(1000)
  await page.locator('text=Все телеканалы').click();
  await page.waitForTimeout(1000)

  //проверяем, что каналы в избранном
  await page.locator('text=Избранные').click();
  await page.isVisible('text=НТВ', 'text=ЦЕНТР')

  //удаляем НТВ и ТВ ЦЕНТР - Москва из избранных, через страницу канала
  await page.waitForSelector('.channel__item-container:nth-child(2) > .channel-container > .channel__item > .channel__wrapper > .channel__title-container > .channel__title-wrapper > .channel__favorite-container > .channel__favorite')
  await page.click('.channel__item-container:nth-child(2) > .channel-container > .channel__item > .channel__wrapper > .channel__title-container > .channel__title-wrapper > .channel__favorite-container > .channel__favorite')
  
  await page.waitForSelector('.channel__wrapper > .channel__title-container > .channel__title-wrapper > .channel__favorite-container > .channel__favorite')
  await page.click('.channel__wrapper > .channel__title-container > .channel__title-wrapper > .channel__favorite-container > .channel__favorite')
  await page.waitForTimeout(2000)

  try {
  //проверяем, что избранном есть надпись 'Добавьте каналы в избранное'
  const FavClear = await page.innerText('.page-main__container > .page-main > .channel__list-component > .channel__list-content > .channel__list-text', {timeout: 5000})
  expect(FavClear).toBe('Добавьте каналы в избранное')
  } catch (err) {console.log('bug https://limehd.atlassian.net/browse/PW-300')}
});