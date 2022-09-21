const { test, expect } = require('@playwright/test');

test.setTimeout(120000)



test('проверка наличия ЕПГ на Первом канале', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/1kanal');

    let channelName = await page.$eval('h1.stream__title', el => el.innerText);

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.screenshot({ path: 'EPG '+ channelName + '.png'})
    await page.locator('text=Закрыть').click();

    // //перемещаемся по каналам
    // let i = 1
    // do {
    //     i++;
    //     await page.locator('.channel__list-container > .channel__list > .channel__item-list:nth-child(' + i + ') > .channel-container > .channel__item').click();
    //     try {
    //         //проверяем, что нет текста об отстутствии ЕПГ
    //         await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 1000 })

    //         //проверяем, что есть время начала и окончания телепрограммы
    //         await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout:1000})

    //         //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    //         // await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button', {timeout: 1000})
    //         // await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item', {timeout: 1000})
    //     } catch (err) { console.log('EPG for channel # ' + i + ' missing') };
    //     // await page.locator('text=Закрыть').click();
    // } while (i < 21)
})

test('проверка наличия ЕПГ на Россия 1', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/rossia1');

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Матч!', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/match');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на НТВ', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/ntv');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на 5 канале', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/5kanal');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Россия К', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/russiak');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Россия 24', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/rossia24');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Карусель', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/karusel');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на ОТР', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/otr');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на ТВЦ', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/tvc');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на РЕН ТВ', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/rentv');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Спас', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/spas');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на СТС', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/sts');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Домашний', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/domashniy');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на ТВ-3', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/tv3');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Пятница', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/pyatnica');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на Звезда', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/zvezda');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на МИР', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/mir');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на ТНТ', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/tnt');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на МУЗ-ТВ', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/muztv');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})

test('проверка наличия ЕПГ на МИР-24', async ({ page }) => {

    await page.goto('https://limehd.tv/channel/mir24');

 

    //проверяем, что нет текста об отстутствии ЕПГ
    await page.waitForSelector('h2:has-text("Телепрограмма отсутствует")', { state: 'hidden', timeout: 5000 })

    //проверяем, что есть время начала и окончания телепрограммы
    await page.waitForSelector('.page-main > .stream__item > .stream__current-program > .current-program__title-container > .current-program__time', {state: 'visible', timeout: 5000})

    //нажимаем на "Телепрограмма, проверяем наличие хотябы 1 телепрограммы"
    await page.click('.page-main > .stream__item > .stream__title-container > .stream__button-container > .stream__button')
    await page.waitForSelector('.main__content > .main__wrapper > .epg__list > li:nth-child(1) > .epg__item')
    await page.locator('text=Закрыть').click();
})