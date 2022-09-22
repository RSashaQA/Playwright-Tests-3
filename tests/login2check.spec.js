const { test, expect } = require('@playwright/test');

test.setTimeout(120000)

test('Тест авторизации в разные аккаунты', async ({ page }) => {

const userName1 = "STPLIME999@gmail.com"
const userName2 = "TEST777@gmail.com"
const userPassword1 = "qqqqqq"

    await page.goto('https://limehd.tv/login');

    //авторизуемся в учетную запись STPLIME999@gmail.com
    await page.locator('[placeholder="Введите e-mail"]').fill(userName1);
    await page.locator('input[type="password"]').fill(userPassword1);
    await page.locator('text=Войти').click();

    //переходим в профиль
    await page.locator('header >> text=s').click({clickCount:2});
    await page.locator('text=Общая информация').click();

    //сверяем учетную запись в профиле
    const userNameLoginCheck1 = await page.innerText('div > .default__layout > .page-main > .profile__title-container > .profile__title');
    expect(userNameLoginCheck1).toBe(userName1);

    //выходим из учетной записи
    await page.locator('header >> text=s').click({clickCount:2});
    await page.locator('text=Выйти из аккаунта').first().click();

    //авторизаяция второй учетной записи
    await page.goto('https://limehd.tv/login');

    //авторизуемся в учетную запись TEST777@gmail.com
    await page.locator('[placeholder="Введите e-mail"]').fill(userName2);
    await page.locator('input[type="password"]').fill(userPassword1);
    await page.locator('text=Войти').click();

    //переходим в профиль
    await page.locator('header >> text=t').click({clickCount:2});
    await page.locator('text=Общая информация').click();

    // try{
    //сверяем учетную запись в профиле
    const userNameLoginCheck2 = await page.innerText('div > .default__layout > .page-main > .profile__title-container > .profile__title');
    expect(userNameLoginCheck2).toBe(userName2);
    // } catch (err) {console.log('bug https://limehd.atlassian.net/browse/PW-302')}
})
