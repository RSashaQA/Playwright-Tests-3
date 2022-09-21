const { test, expect } = require('@playwright/test');

test.setTimeout(120000)



test('проверка наличия ЕПГ на Первом канале', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/1kanal');
    
    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h11', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})


test('проверка наличия ЕПГ на Россия 1', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/rossia1');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Матч!', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/match');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > p', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > p', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на НТВ', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/ntv');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > p', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > p', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на 5 канале', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/5kanal');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > p', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > p', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Россия К', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/russiak');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Россия 24', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/rossia24');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Карусель', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/karusel');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > p', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > p', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на ОТР', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/otr');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > p', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > p', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на ТВЦ', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/tvc');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > p', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > p', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на РЕН ТВ', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/rentv');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Спас', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/spas');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на СТС', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/sts');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Домашний', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/domashniy');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на ТВ-3', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/tv3');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Пятница', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/pyatnica');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Звезда', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/zvezda');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на МИР', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/mir');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на ТНТ', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/tnt');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на МУЗ-ТВ', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/muztv');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на МИР-24', async ({ page, browserName }) => {

    await page.goto('https://limehd.tv/channel/mir24');

    await page.waitForSelector('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', { timeout: 5000 })
    let channelName = await page.$eval('#__layout > div > div.default__layout > div > div.stream__item > div.stream__title-container > h1', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', { state: 'visible', timeout: 5000 })

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    //await page.screenshot({ path: 'EGP/EPG ' + channelName + ' ' + browserName + '.png' })
    await page.locator('text=Закрыть').click();
})