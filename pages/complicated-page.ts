import { Page, Locator } from '@playwright/test';

export class complicatedPage{
    readonly page:Page;
    readonly elements: {
        [key:string]: Locator;
    };

    constructor(page: Page){
        this.page = page;

        this.elements = {
            btn7 : page.locator('a.et_pb_button.et_pb_button_7'),
            btnF3 : page.locator('li.et_pb_social_media_follow_network_3'),
            btnT6 : page.locator('li.et_pb_social_media_follow_network_6'),
            showHide : page.locator('a.lwptoc_toggle_label[data-label*=show]').first(),
            menuTxt : page.locator('a[href="#Skills_Improved"]').first(),
    
            inputName : page.locator('#et_pb_contact_name_0'),
            inputEmail : page.locator('#et_pb_contact_email_0'),
            inputMsg : page.locator('#et_pb_contact_message_0'),
            inputField : page.locator('input.et_pb_contact_captcha').first(),
            submitButton : page.locator('button.et_pb_contact_submit').first(),
            TxtContact : page.locator('div.et-pb-contact-message > p:has-text("Thanks for contacting us")'),
        
            toggleElement : page.locator('h5.et_pb_toggle_title > span#A_toggle'),
            toggleContentElement : page.locator('div.et_pb_toggle_content:has-text("Inside of toggle")'),
    
            inputName1 : page.locator('#et_pb_contact_name_1.input'),
            inputEmail1 : page.locator('#et_pb_contact_email_1.input'),
            inputMsg1 : page.locator('#et_pb_contact_message_1.input'),
            inputField1 : page.locator('input.et_pb_contact_captcha').nth(1),
            submitButton1 : page.locator('button.et_pb_contact_submit').nth(1),
        };

    }
    async socialTButton(){
        await this.elements.btn7.click();
        await this.elements.btnT6.click();
        await this.page.waitForURL('https://twitter.com/Nikolay_A00');
    }
    async socialFButton(){
        await this.elements.btn7.click();
        await this.elements.btnF3.click();
        await this.page.waitForURL('https://www.facebook.com/Ultimateqa1/');
    }
    async hiddenMenu(){
        await this.elements.menuTxt.isVisible();
        await this.elements.showHide.click();
        await this.elements.menuTxt.isHidden();
        await this.elements.showHide.click();
        await this.elements.menuTxt.isVisible();
        await this.elements.menuTxt.click();
    }

    async commentCapcha(){
        await this.elements.inputName.type('Kridha Rio');
        await this.elements.inputEmail.type('rio@kridhacompany.co');
        await this.elements.inputMsg.type('This is message from tomorrow');

        //Get capcha value, store in variable
        const firstDigit = await this.elements.inputField.first().getAttribute('data-first_digit');
        const secondDigit = await this.elements.inputField.first().getAttribute('data-second_digit');

        const firstNumb = parseInt(firstDigit!, 10);
        const secondNumb = parseInt(secondDigit!, 10);
        
        //capcha requirement (to sum 1st number and 2nd number)
        const sum = firstNumb + secondNumb;

        await this.elements.inputField.type(sum.toString());
        await this.elements.submitButton.click();
        await this.elements.TxtContact.isVisible();
    }

    async toggleMenu(){
        await this.elements.toggleContentElement.isHidden();
        await this.elements.toggleElement.click();
        await this.elements.toggleContentElement.isVisible();
        await this.elements.toggleElement.click();
        await this.elements.toggleContentElement.isHidden();
    }

    async commentCapcha1(){
        await this.elements.inputName1.type('Kridha Rio');
        await this.elements.inputEmail1.type('rio@kridhacompany.co');
        await this.elements.inputMsg1.type('This is message from tomorrow');

        //Get capcha value, store in variable
        const firstDigit = await this.elements.inputField1.first().getAttribute('data-first_digit');
        const secondDigit = await this.elements.inputField1.first().getAttribute('data-second_digit');

        const firstNumb = parseInt(firstDigit!, 10);
        const secondNumb = parseInt(secondDigit!, 10);
        
        //capcha requirement (to sum 1st number and 2nd number)
        const sum = firstNumb + secondNumb;

        await this.elements.inputField1.type(sum.toString());
        await this.elements.submitButton1.click();
        await this.elements.TxtContact.isVisible();
    }
}