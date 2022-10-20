const { test, webkit, chromium, firefox } = require('@playwright/test');

test.use({ viewport: { width: 1920, height: 1080 } });

const userNamePassWebkit = ('testdeletemepassweb@test.test')
const userNamePassFirefox = ('testdeletemepassfire@test.test')
const userNamePassChromium = ('testdeletemepasschro@test.test')
const passwordPass = ('qqqqqq')
const newPassword = ('wwwwww')

test.setTimeout(100000);

test('Тест смены пароля', async ({ page, browserName }) => {

        await page.goto('https://test.limehd.tv/signup');

        //для регистрации в разных браузерах используется свой e-mail
        if (browserName == 'webkit') {
            await page.locator('input[type="email"]').fill(userNamePassWebkit)
        }
        if (browserName == 'chromium') {
            await page.locator('input[type="email"]').fill(userNamePassChromium)
        }
        if (browserName == 'firefox') {
            await page.locator('input[type="email"]').fill(userNamePassFirefox)
        }
        // дальше код исполняется для всех браузеров
        await page.locator('input[type="password"]').first().fill(passwordPass);
        await page.locator('text=Повторите пароль >> input[type="password"]').fill(passwordPass);
        await page.locator('text=Зарегистрироваться').click();
        await page.locator('text=Отлично').click();

        //Переходим в личный кабинет
        await page.locator('header >> text=t').click({ clickCount: 2 });
        await page.locator('text=Общая информация').click();

        //Нажимаем изменить
        await page.locator('text=Изменить').click();

        // await console.log('bug https://limehd.atlassian.net/browse/PW-310');

        // //оставить  все поля  пустыми, нажать "Сохранить пароль"
        // await page.locator('text=Сохранить пароль').click();

        // //проверить отображающиеся ошибки
        // await page.waitForSelector('text=Старый пароль Введите пароль >> span')
        // await page.waitForSelector('text=Новый пароль Введите пароль >> span')
        // await page.waitForSelector('text=Пароли не совпадают', {state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Введите пароль длиннее 5 символов', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Старый пароль введен не верно', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Необходимо заполнить «Старый пароль».', { state: 'hidden', timeout: 100 })


        // //заполнить поле "Новый пароль" маленьким паролем
        // await page.locator('text=Новый пароль >> input[type="password"]').fill('qq');
        // await page.locator('text=Сохранить пароль').click();

        // //проверить отображающиеся ошибки
        // await page.waitForSelector('text=Старый пароль Введите пароль >> span')
        // await page.waitForSelector('text=Новый пароль Введите пароль >> span')
        // await page.waitForSelector('text=Пароли не совпадают', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Введите пароль длиннее 5 символов')
        // await page.waitForSelector('text=Старый пароль введен не верно', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Необходимо заполнить «Старый пароль».', { state: 'hidden', timeout: 100 })


        // //заполнить поле "Новый пароль" и "Повторите пароль" одинаковым, но маленьким паролем        
        // await page.locator('text=Новый пароль >> input[type="password"]').fill('qq');
        // await page.locator('text=Повторите пароль >> input[type="password"]').fill('qq');
        // await page.locator('text=Сохранить пароль').click();

        // //проверить отображающиеся ошибки
        // await page.waitForSelector('text=Старый пароль Введите пароль >> span')
        // await page.waitForSelector('text=Новый пароль Введите пароль >> span')
        // await page.waitForSelector('text=Пароли не совпадают', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Введите пароль длиннее 5 символов')
        // await page.waitForSelector('text=Старый пароль введен не верно', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Необходимо заполнить «Старый пароль».', { state: 'hidden', timeout: 100 })


        // //заполнить поле "Новый пароль" и "Повторите пароль" разными паролями, в поле новый пароль маленькое значение        
        // await page.locator('text=Новый пароль >> input[type="password"]').fill('qq');
        // await page.locator('text=Повторите пароль >> input[type="password"]').fill('qqqqq');
        // await page.locator('text=Сохранить пароль').click();

        // //проверить отображающиеся ошибки
        // await page.waitForSelector('text=Старый пароль Введите пароль >> span')
        // await page.waitForSelector('text=Новый пароль Введите пароль >> span')
        // await page.waitForSelector('text=Пароли не совпадают')
        // await page.waitForSelector('text=Введите пароль длиннее 5 символов')
        // await page.waitForSelector('text=Старый пароль введен не верно', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Необходимо заполнить «Старый пароль».', { state: 'hidden', timeout: 100 })


        // //заполнить поле "Новый пароль" и "Повторите пароль" разными паролями, в поле новый пароль допустимое количество символов        
        // await page.locator('text=Новый пароль >> input[type="password"]').fill('qqwwww');
        // await page.locator('text=Повторите пароль >> input[type="password"]').fill('qqq');
        // await page.locator('text=Сохранить пароль').click();

        // //проверить отображающиеся ошибки
        // await page.waitForSelector('text=Старый пароль Введите пароль >> span')
        // await page.waitForSelector('text=Новый пароль Введите пароль >> span', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Пароли не совпадают')
        // await page.waitForSelector('text=Введите пароль длиннее 5 символов', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Старый пароль введен не верно', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Необходимо заполнить «Старый пароль».', { state: 'hidden', timeout: 100 })



        // //проверка наличия ошибки "Необходимо заполнить «Старый пароль».". Заполнить поле "Новый пароль" и "Повторите пароль" одинаковыми допустимыми значениями, поле старый пароль оставить пустым
        // await page.locator('text=Изменить').click();
        // await page.locator('text=Старый пароль >> input[type="password"]').fill('');
        // await page.locator('text=Новый пароль >> input[type="password"]').fill(newPassword);
        // await page.locator('text=Повторите пароль >> input[type="password"]').fill(newPassword);
        // await page.locator('text=Сохранить пароль').click();

        // //проверить отображающиеся ошибки
        // try {
        //     await page.waitForSelector('text=Старый пароль Введите пароль >> span')
        //     await page.waitForSelector('text=Новый пароль Введите пароль >> span', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Пароли не совпадают', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Введите пароль длиннее 5 символов', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Старый пароль введен не верно', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Необходимо заполнить «Старый пароль».', { timeout: 500 })
        // } catch (err) { console.log(browserType.name() + ' bug https://limehd.atlassian.net/browse/PW-311') }
        // //bug 


        // //проверка наличия ошибки "Необходимо заполнить «Старый пароль».". Заполнить поле "Новый пароль" и "Повторите пароль" одинаковыми допустимыми значениями, поле старый пароль оставить пустым     
        // await page.locator('text=Повторите пароль >> input[type="password"]').fill(newPassword);
        // await page.locator('text=Новый пароль >> input[type="password"]').fill(newPassword);
        // await page.locator('text=Старый пароль >> input[type="password"]').fill('');
        // await page.locator('text=Сохранить пароль').click();
        // try {
        //     //проверить отображающиеся ошибки
        //     await page.waitForSelector('text=Старый пароль Введите пароль >> span')
        //     await page.waitForSelector('text=Новый пароль Введите пароль >> span', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Пароли не совпадают', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Введите пароль длиннее 5 символов', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Старый пароль введен не верно', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Необходимо заполнить «Старый пароль».', { timeout: 500 })
        //     await page.waitForSelector('text=Введите пароль длиннее 4 символов', { state: 'hidden', timeout: 100 })
        // } catch (err) { console.log(browserType.name() + ' bug https://limehd.atlassian.net/browse/PW-312') }
        // //bug

        // //смена пароля старый пароль совпадает с новым
        // await page.locator('text=Старый пароль >> input[type="password"]').fill(passwordFav);
        // await page.locator('text=Новый пароль >> input[type="password"]').fill(passwordFav);
        // await page.locator('text=Повторите пароль >> input[type="password"]').fill(passwordFav);
        // await page.locator('h3:has-text("Информация")').click();
        // await page.locator('text=Сохранить пароль').click();


        // //проверить отображающиеся ошибки
        // try {
        //     await page.waitForSelector('text=Старый пароль Введите пароль >> span', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Новый пароль Введите пароль >> span', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Пароли не совпадают', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Введите пароль длиннее 5 символов', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Старый пароль введен не верно', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Необходимо заполнить «Старый пароль».', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Введите пароль длиннее 4 символов', { state: 'hidden', timeout: 100 })
        //     await page.waitForSelector('text=Старый пароль совпадает с новым')
        // } catch (error) {
            
        // }


        //смена пароля, хороший сценарий
        await page.locator('text=Старый пароль >> input[type="password"]').fill(passwordPass);
        await page.locator('text=Новый пароль >> input[type="password"]').fill(newPassword);
        await page.locator('text=Повторите пароль >> input[type="password"]').fill(newPassword);
        await page.locator('h3:has-text("Информация")').click();
        await page.locator('text=Сохранить пароль').click();

        //проверить отображающиеся ошибки (их нет)
        // await page.waitForSelector('text=Старый пароль Введите пароль >> span', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Новый пароль Введите пароль >> span', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Пароли не совпадают', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Введите пароль длиннее 5 символов', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Старый пароль введен не верно', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Необходимо заполнить «Старый пароль».', { state: 'hidden', timeout: 100 })
        // await page.waitForSelector('text=Введите пароль длиннее 4 символов', { state: 'hidden', timeout: 100 })
        //await page.waitForSelector('text=Старый пароль совпадает с новым', { state: 'hidden', timeout: 3000 })
        //await page.waitForSelector('text=Пароль успешно изменен')

        //пароль успешно изменён
        await page.locator('text=Отлично!').click();

        await page.goto('https://limehd.tv');

        await page.waitForTimeout(2000)
        await page.locator('header >> text=t').click({ clickCount: 2 });
        await page.waitForTimeout(2000)
        await page.locator('text=Выйти из аккаунта').click();

        await page.goto('https://test.limehd.tv/login');

        //для авторизации в разных браузерах используется свой e-mail

        if (browserName == 'webkit') {
            await page.locator('input[type="email"]').fill(userNamePassWebkit)
        }
        if (browserName == 'chromium') {
            await page.locator('input[type="email"]').fill(userNamePassChromium)
        }
        if (browserName == 'firefox') {
            await page.locator('input[type="email"]').fill(userNamePassFirefox)
        }

        await page.locator('input[type="password"]').fill(newPassword);
        await page.locator('text=Войти').click();
        await page.waitForTimeout(2000)
        await page.waitForSelector('header >> text=t');
});