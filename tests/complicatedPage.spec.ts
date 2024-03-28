import { expect, test } from '@playwright/test';
import { complicatedPage } from '../pages/complicated-page';

const URL = 'https://ultimateqa.com/complicated-page';
const fURL = 'https://www.facebook.com/Ultimateqa1/';
const tURL = 'https://twitter.com/Nikolay_A00';

test.describe('Complicated Element',() =>{
    
    test.beforeEach(async ({page}) =>{
        await page.goto(URL);
    })

    test ('Button T Element', async ({page}) => {
        const ComplicatedPage = new complicatedPage(page);
        await ComplicatedPage.socialTButton();
        await expect(page).toHaveURL(tURL);
    })
    test ('Button F Element', async ({page}) => {
        const ComplicatedPage = new complicatedPage(page);;
        await ComplicatedPage.socialFButton();
        await expect(page).toHaveURL(fURL);
    })
    test ('Show Hidden', async ({page}) => {
        const ComplicatedPage = new complicatedPage(page);;
        await ComplicatedPage.hiddenMenu();
        await expect(page).toHaveURL(URL);
    })
    test ('Comment Message', async ({page}) => {
        const ComplicatedPage = new complicatedPage(page);;
        await ComplicatedPage.commentCapcha();
        //await expect(page).toHaveURL(URL);
    })
    test ('Toggle Menu', async ({page}) => {
        const ComplicatedPage = new complicatedPage(page);;
        await ComplicatedPage.toggleMenu();
        //await expect(page).toHaveURL(URL);
    })
    test ('Comment Message 2', async ({page}) => {
        const ComplicatedPage = new complicatedPage(page);;
        await ComplicatedPage.commentCapcha1();
        //await expect(page).toHaveURL(URL);
    })
})