const { test, expect } = require('@playwright/test');
const { limehdUrl } = require('./consts/constants');


test.use({ viewport: { width: 1920, height: 1080 } });

test('Тест обратной связи', async ({ page }) => {
    await page.goto(limehdUrl)

    await page.locator('text=Обратная связь').click();

    //проверяем, что на странице есть заголовок "Отправить запрос" и остальные элементы страницы
    // const feedbackTest = await page.innerText('#__layout > .page-info > .page-main > .feedback__container > .feedback__title');
    // expect(feedbackTest).toBe('Отправить запрос');
    await page.isVisible('text=Отправить запрос E-mail Введите e-mail Платформа Сайт Имя Ваше обращение Отправи')

    //нажимаем на отправить запрос не заполнив обязательные поля
    await page.locator('button:has-text("Отправить запрос")').click();

    //ошибка "Введите e-mail"
    await page.waitForSelector('.page-info > .page-main > .feedback__container > .feedback__label > .input__error');
    const errorEmail1 = await page.innerText('.page-info > .page-main > .feedback__container > .feedback__label > .input__error');
    expect(errorEmail1).toBe('Введите e-mail');

    //заполним поле e-mail не валидным e-mail
    await page.locator('[placeholder="Введите e-mail"]').fill('TEST');

    //заполним поле "Имя"
    await page.locator('[placeholder="Введите имя"]').fill('TEST');

    //проверяем наличие ошибки при вводе не валидного e-mail
    const errorEmail2 = await page.innerText('.page-info > .page-main > .feedback__container > .feedback__label > .input__error');
    expect(errorEmail2).toBe('Введите корректный e-mail');

    //Нажимаем отправить запрос, сообщение не должно быть отправлено
    await page.locator('button:has-text("Отправить запрос")').click();
    await page.isHidden('Сообщение отправлено')

    //заполним поле e-mail валидным значением
    await page.locator('[placeholder="Введите e-mail"]').fill('test@test.test');

    //Нажимаем отправить запрос, сообщение не должно быть отправлено, не заполнено второе обязательное поле "Ваше обращение"
    await page.locator('button:has-text("Отправить запрос")').click();
    await page.isHidden('Сообщение отправлено')

    //заполним поле "Ваше обращение"
    await page.locator('textarea').fill('test');

    //проверим выпадающий список на наличие всех платформ для выбора
    await page.locator('text=Платформа Сайт >> div').click();
    await page.isVisible('text=iOS')
    await page.isVisible('text=Android')
    await page.isVisible('text=Smart TV Samsung')
    await page.isVisible('text=Smart TV LG')
    await page.isVisible('text=Windows')

    //заполним все обязательные поля, отправляем запрос, проверяем, что сообщение отправилось
    await page.locator('button:has-text("Отправить запрос")').click();
    const feedbackSucces1 = await page.innerText('.feedback__container > .modal-window > .modal-container > .modal__container > .modal__message');
    expect(feedbackSucces1).toBe('Сообщение отправлено');
    const feedbackSucces2 = await page.innerText('.feedback__container > .modal-window > .modal-container > .modal__container > .modal__button');
    expect(feedbackSucces2).toBe('Отлично!');
    await page.locator('text=Отлично!').click();
})