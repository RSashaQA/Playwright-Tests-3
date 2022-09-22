// const { test, expect } = require('@playwright/test');

// test('Тест наличие подписки и описания', async ({ page }) => {

// не понятная верстка, лишние пробелы, переносы текста - тестирование откладывается

//     await page.goto('https://limehd.tv/subscribes/141')

//     const packStartDescription = await page.innerText('#__layout > div > div.default__layout > div > div.pack__container > div.pack__wrapper > div > div.pack__info > div.pack__info-container > div > p');
//     expect(packStartDescription).toBe('/.*Самые обсуждаемые сериалы и эксклюзивные кинопремьеры.*/');

//     const packStarPrice = await page.innerText('#__layout > div > div.default__layout > div > div.pack__container > div.pack__wrapper > div > div.pack__info > div.pack__info-container > div > div > span.pack__price');
//     expect(packStarPrice).toBe('399');

//     console.log('кривая верстка, лишние пробелы, перенос строки')

//     const packStarButton = await page.innerText('button.pack__button');
//     expect(packStarButton).toBe('Оформить подписку');

//     const packStarDescr = await page.innerText('div.pack__descr-mobile');
//     expect(packStarDescr).toBe('При оформлении подписки на сайте фильмы и сериалы, доступные в пакете, можно смотреть только в мобильном приложении "Лайм HD TV".');
// })