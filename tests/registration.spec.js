const { test, expect, webkit, chromium, firefox } = require('@playwright/test');
const { limehdUrl } = require('./consts/constants');

test.use({ viewport: { width: 1920, height: 1080 } });

const userNameRegWebkit = ('testdeletemRegWeb@test.test') //не забыть подчищать созданные аккаунты
const userNameRegFirefox = ('testdeletemRegFire@test.test')
const userNameRegChromium = ('testdeletemRegChro@test.test')

test('Тест регистрации, проверка текста ошибок около полей ввода. Успешная регистрация', async ({page, browserName}) => {

        await page.goto(limehdUrl + '/signup');

        // //попытка зарегистрироваться без ввода данных
        // await page.locator('text=Зарегистрироваться').click();

        // //проверка ошибок
        // await page.waitForSelector('text=Введите e-mail');
        // await page.waitForSelector('text=Введите пароль');
        // await page.waitForSelector('text=Введите корректный e-mail', { state: 'hidden', timeout: 100 });
        // await page.waitForSelector('text=Введите пароль длиннее 5 символов', { state: 'hidden', timeout: 100 });
        // await page.waitForSelector('text=Пароли не совпадают', { state: 'hidden', timeout: 100 });

        // //попытка зарегистрироваться без ввода паролья, почта не валидная
        // await page.locator('[placeholder="Введите e-mail"]').fill('testdeletemelimehd.tv');
        // await page.locator('text=Зарегистрироваться').click();

        // //проверка ошибок
        // await page.waitForSelector('text=Введите e-mail', { state: 'hidden', timeout: 100 });
        // await page.waitForSelector('text=Введите пароль');
        // await page.waitForSelector('text=Введите корректный e-mail');
        // await page.waitForSelector('text=Введите пароль длиннее 5 символов', { state: 'hidden', timeout: 100 });
        // await page.waitForSelector('text=Пароли не совпадают', { state: 'hidden', timeout: 100 });


        // //попытка зарегистрироваться в поле e-mail невалидные данные, маленький и разные пароли в полях password
        // await page.locator('[placeholder="Введите e-mail"]').fill('testdeletemelimehd.tv');
        // await page.locator('input[type="password"]').first().fill('qq');
        // await page.locator('text=Повторите пароль >> input[type="password"]').fill('qqqq');
        // await page.locator('text=Зарегистрироваться').click();

        // //проверка ошибок
        // await page.waitForSelector('text=Введите e-mail', { state: 'hidden', timeout: 500 });
        // await page.waitForSelector('text=Введите пароль'); //если указать state: 'hidden' - скрипт ломается
        // await page.waitForSelector('text=Введите корректный e-mail');
        // await page.waitForSelector('text=Введите пароль длиннее 5 символов');
        // await page.waitForSelector('text=Пароли не совпадают');


        // //ввод валидного e-mail
        // await page.locator('[placeholder="Введите e-mail"]').fill('123@321.test');
        // await page.locator('text=Зарегистрироваться').click();

        // //проверка текста ошибок
        // await page.waitForSelector('text=Введите e-mail', { state: 'hidden', timeout: 100 });
        // await page.waitForSelector('text=Введите пароль'); //если указать state: 'hidden' - скрипт ломается
        // await page.waitForSelector('text=Введите корректный e-mail', { state: 'hidden', timeout: 100 });
        // await page.waitForSelector('text=Введите пароль длиннее 5 символов');
        // await page.waitForSelector('text=Пароли не совпадают');


        // //ввод маленьких, но повторяющихся паролей
        // await page.locator('input[type="password"]').first().fill('qqq');
        // await page.locator('text=Повторите пароль >> input[type="password"]').fill('qqq');
        // await page.locator('text=Зарегистрироваться').click();

        // //проверка текста ошибок
        // await page.waitForSelector('text=Введите e-mail', { state: 'hidden', timeout: 100 });
        // await page.waitForSelector('text=Введите пароль'); //если указать state: 'hidden' - скрипт ломается
        // await page.waitForSelector('text=Введите корректный e-mail', { state: 'hidden', timeout: 100 });
        // await page.waitForSelector('text=Введите пароль длиннее 5 символов');
        // await page.waitForSelector('text=Пароли не совпадают', { state: 'hidden', timeout: 100 });

        // //ввод маленьких, но повторяющихся паролей, поле e-mail пустое
        // await page.locator('[placeholder="Введите e-mail"]').fill('');
        // await page.locator('input[type="password"]').first().fill('qqq');
        // await page.locator('text=Повторите пароль >> input[type="password"]').fill('qqq');
        // await page.locator('text=Зарегистрироваться').click();

        // //проверка текста ошибок
        // await page.waitForSelector('text=Введите e-mail');
        // await page.waitForSelector('text=Введите пароль'); //если указать state: 'hidden' - скрипт ломается
        // await page.waitForSelector('text=Введите корректный e-mail', { state: 'hidden', timeout: 100 });
        // await page.waitForSelector('text=Введите пароль длиннее 5 символов');
        // await page.waitForSelector('text=Пароли не совпадают', { state: 'hidden', timeout: 100 });

        // //ввод не повторяющихся паролей, поле e-mail пустое
        // await page.locator('[placeholder="Введите e-mail"]').fill('');
        // await page.locator('input[type="password"]').first().fill('qqqqqqq');
        // await page.locator('text=Повторите пароль >> input[type="password"]').fill('qqqqqqqqqq');
        // await page.locator('text=Зарегистрироваться').click();

        // //проверка текста ошибок
        // await page.waitForSelector('text=Введите e-mail');
        // await page.waitForSelector('text=Введите пароль', { state: 'hidden', timeout: 100 });
        // await page.waitForSelector('text=Введите корректный e-mail', { state: 'hidden', timeout: 100 });
        // await page.waitForSelector('text=Введите пароль длиннее 5 символов', { state: 'hidden', timeout: 100 });
        // await page.waitForSelector('text=Пароли не совпадают');


        //ввод в во все поля валидных данных
        if (browserName == 'webkit') {
            await page.locator('input[type="email"]').fill(userNameRegWebkit)
        }
        if (browserName == 'chromium') {
            await page.locator('input[type="email"]').fill(userNameRegChromium)
        }
        if (browserName == 'firefox') {
            await page.locator('input[type="email"]').fill(userNameRegFirefox)
        }

        await page.locator('input[type="password"]').first().fill('qqqqqq');
        await page.locator('text=Повторите пароль >> input[type="password"]').fill('qqqqqq');
        await page.locator('text=Зарегистрироваться').click();

        await page.waitForTimeout(5000)
        //сверяем учетную запись в профиле

        await page.locator('header >> text=t').click({ clickCount: 2 });
        await page.locator('text=Общая информация').click();

        if (browserName == 'webkit') {
            const userNameCheck = await page.innerText('div > .default__layout > .page-main > .profile__title-container > .profile__title');
            expect(userNameCheck).toBe(userNameRegWebkit);
        }
        if (browserName == 'chromium') {
            const userNameCheck = await page.innerText('div > .default__layout > .page-main > .profile__title-container > .profile__title');
            expect(userNameCheck).toBe(userNameRegChromium);
        }
        if (browserName == 'firefox') {
            const userNameCheck = await page.innerText('div > .default__layout > .page-main > .profile__title-container > .profile__title');
            expect(userNameCheck).toBe(userNameRegFirefox);
        }

        await page.goto(limehdUrl + '/signup');

        //попытка повторной регистрации существующего аккаунта
        if (browserName == 'webkit') {
            await page.locator('input[type="email"]').fill(userNameRegWebkit)
        }
        if (browserName == 'chromium') {
            await page.locator('input[type="email"]').fill(userNameRegChromium)
        }
        if (browserName == 'firefox') {
            await page.locator('input[type="email"]').fill(userNameRegFirefox)
        }
        await page.locator('input[type="password"]').first().fill('qqqqqq');
        await page.locator('text=Повторите пароль >> input[type="password"]').fill('qqqqqq');
        await page.locator('text=Зарегистрироваться').click();

        //проверка текста ошибки
        const emailAlreadyUsed = await page.innerText('.login__form > .is__token > .form__container > .form__error > .error__text');
        expect(emailAlreadyUsed).toBe('Такой пользователь уже существует');
        await page.waitForSelector('text=Такой пользователь уже существует');
})

// test('Вывел баги из общего теста', async () => {

//     for (const browserType of [webkit, chromium, firefox]) {
//         const browser = await browserType.launch();
//         const page = await browser.newPage();

//         await page.goto(limehdUrl + '/signup');

//         //нажать на регистрацию не вводя данные
//         await page.locator('text=Зарегистрироваться').click();

//         //проверка текста ошибки
//         await page.waitForSelector('text=Введите e-mail');
//         await page.waitForSelector('text=Введите пароль');
//         await page.waitForSelector('text=Введите корректный e-mail', { state: 'hidden', timeout: 100 });
//         await page.waitForSelector('text=Введите пароль длиннее 5 символов', { state: 'hidden', timeout: 100 });
//         await page.waitForSelector('text=Пароли не совпадают', { state: 'hidden', timeout: 100 });

//         //ввести в поле пароль короткий пароль, остальные поля остаются пустыми
//         await page.locator('input[type="password"]').first().fill('qq');
//         await page.locator('text=Зарегистрироваться').click()

//         //проверка текста ошибки
//         await page.waitForSelector('text=Введите e-mail');
//         await page.waitForSelector('text=Введите пароль');
//         await page.waitForSelector('text=Введите корректный e-mail', { state: 'hidden', timeout: 100 });
//         await page.waitForSelector('text=Введите пароль длиннее 5 символов');
//         await page.waitForSelector('text=Пароли не совпадают');

//         //очистить значение пароль, нажать регистрация
//         await page.locator('input[type="password"]').first().fill('');
//         await page.locator('text=Зарегистрироваться').click()

// //        try {
//             //проверка текста ошибки
//             await page.waitForSelector('text=Введите e-mail');
//             await page.waitForSelector('text=Введите пароль');
//             await page.waitForSelector('text=Введите корректный e-mail', { state: 'hidden', timeout: 100 });
//             await page.waitForSelector('text=Введите пароль длиннее 5 символов', { state: 'hidden', timeout: 100 });
//             await page.waitForSelector('text=Пароли не совпадают', { state: 'hidden', timeout: 100 });
//  //       } catch (err) { console.log('bug https://limehd.atlassian.net/browse/PW-303') }
//     }
// })