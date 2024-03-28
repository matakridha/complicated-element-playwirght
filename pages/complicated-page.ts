import { Page, Locator } from '@playwright/test';

export class complicatedPage{
    readonly page:Page;
    readonly btn7: Locator;
    readonly btnF3: Locator;
    readonly btnT6: Locator;
    readonly showHide: Locator;
    readonly menuTxt: Locator;
    readonly inputName: Locator;
    readonly inputEmail: Locator;
    readonly inputMsg: Locator;
    readonly inputName1: Locator;
    readonly inputEmail1: Locator;
    readonly inputMsg1: Locator;
    readonly inputField: Locator;
    readonly submitButton: Locator;
    readonly inputField1: Locator;
    readonly submitButton1: Locator;
    readonly TxtContact: Locator;
    readonly toggleElement: Locator;
    readonly toggleContentElement: Locator;

    constructor(page: Page){
        this.page = page;
        this.btn7 = page.locator('a.et_pb_button.et_pb_button_7');
        this.btnF3 = page.locator('li.et_pb_social_media_follow_network_3');
        this.btnT6 = page.locator('li.et_pb_social_media_follow_network_6');
        this.showHide = page.locator('a.lwptoc_toggle_label[data-label*=show]').first();
        this.menuTxt = page.locator('a[href="#Skills_Improved"]').first();

        this.inputName = page.locator('#et_pb_contact_name_0');
        this.inputEmail = page.locator('#et_pb_contact_email_0');
        this.inputMsg = page.locator('#et_pb_contact_message_0');
        this.inputField = page.locator('input.et_pb_contact_captcha').first();
        this.submitButton = page.locator('button.et_pb_contact_submit').first();
        this.TxtContact = page.locator('div.et-pb-contact-message > p:has-text("Thanks for contacting us")');
    
        this.toggleElement = page.locator('h5.et_pb_toggle_title > span#A_toggle');
        this.toggleContentElement = page.locator('div.et_pb_toggle_content:has-text("Inside of toggle")');

        this.inputName1 = page.locator('#et_pb_contact_name_1.input');
        this.inputEmail1 = page.locator('#et_pb_contact_email_1.input');
        this.inputMsg1 = page.locator('#et_pb_contact_message_1.input');
        this.inputField1 = page.locator('input.et_pb_contact_captcha').nth(1);
        this.submitButton1 = page.locator('button.et_pb_contact_submit').nth(1);
    }
    async socialTButton(){
        await this.btn7.click();
        await this.btnT6.click();
        await this.page.waitForURL('https://twitter.com/Nikolay_A00');
    }
    async socialFButton(){
        await this.btn7.click();
        await this.btnF3.click();
        await this.page.waitForURL('https://www.facebook.com/Ultimateqa1/');
    }
    async hiddenMenu(){
        await this.menuTxt.isVisible();
        await this.showHide.click();
        await this.menuTxt.isHidden();
        await this.showHide.click();
        await this.menuTxt.isVisible();
        await this.menuTxt.click();
    }

    async commentCapcha(){
        await this.inputName.type('Kridha Rio');
        await this.inputEmail.type('rio@kridhacompany.co');
        await this.inputMsg.type('This is message from tomorrow');

        //Capcha
        const firstDigit = await this.inputField.first().getAttribute('data-first_digit');
        const secondDigit = await this.inputField.first().getAttribute('data-second_digit');

        const firstNumb = parseInt(firstDigit!, 10);
        const secondNumb = parseInt(secondDigit!, 10);

        const sum = firstNumb + secondNumb;

        await this.inputField.type(sum.toString());
        await this.submitButton.click();
        await this.TxtContact.isVisible();
    }

    async toggleMenu(){
        await this.toggleContentElement.isHidden();
        await this.toggleElement.click();
        await this.toggleContentElement.isVisible();
        await this.toggleElement.click();
        await this.toggleContentElement.isHidden();
    }

    async commentCapcha1(){
        await this.inputName1.type('Kridha Rio');
        await this.inputEmail1.type('rio@kridhacompany.co');
        await this.inputMsg1.type('This is message from tomorrow');

        //Capcha
        const firstDigit = await this.inputField1.first().getAttribute('data-first_digit');
        const secondDigit = await this.inputField1.first().getAttribute('data-second_digit');

        const firstNumb = parseInt(firstDigit!, 10);
        const secondNumb = parseInt(secondDigit!, 10);

        const sum = firstNumb + secondNumb;

        await this.inputField1.type(sum.toString());
        await this.submitButton1.click();
        await this.TxtContact.isVisible();
    }
}