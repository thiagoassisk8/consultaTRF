const puppeteer = require('puppeteer');
const CREDS = require('./cpf');
(async function(){
    try{
        const browser = await puppeteer.launch({
            headless:false,
            ignoreHTTPSErrors:false,
            defaultViewport: null
        });
        let link ='https://sistemas.trf1.jus.br/certidao/#/solicitacao';        
        let cpf = CREDS.cpf
        function RetiraMascara(ObjCPF) {
            console.log(ObjCPF.replace(/\D/g, ''))
              return ObjCPF.replace(/\D/g, '');
          }
          // Criminal
        const page = await browser.newPage();
        await page.goto(link, {waitUntil: 'load'});
        await page.waitForSelector('span[class="mat-select-placeholder ng-tns-c87-1 ng-star-inserted"]', { visible: true })
        await page.type('#mat-input-0',RetiraMascara(cpf));
        await page.waitForSelector('div[class="mat-form-field-infix ng-tns-c67-2"]', { visible: true })
        await delay(700);
        await page.click('#mat-select-0')
        await delay(900);
        await page.click('#mat-option-1')
        await page.waitForSelector('input[class="mat-autocomplete-trigger mat-chip-input mat-input-element ng-untouched ng-pristine ng-valid"]');
        await page.click('input[id="mat-chip-list-input-0"]', {class:'mat-autocomplete-trigger mat-chip-input mat-input-element ng-pristine ng-valid ng-touched' });        
        await delay(2000);
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');        
        await page.click('.mat-button-wrapper')[0];        
        await page.waitForSelector('button[class="mat-focus-indicator button-add mdl-button mdl-js-button mdl-button--raised mdl-button--primary imprimir mat-raised-button mat-button-base mat-primary"]');
        await page.evaluate(() => {
            if(window.location.href ==='https://sistemas.trf1.jus.br/certidao/#/certidao'){
                document.getElementsByClassName('mat-focus-indicator button-add mdl-button mdl-js-button mdl-button--raised mdl-button--primary imprimir mat-raised-button mat-button-base mat-primary')[0].click();
            }
        })

        // Civil
        const newpage = await browser.newPage();
        await newpage.goto(link, {waitUntil: 'load'});
        await newpage.waitForSelector('span[class="mat-select-placeholder ng-tns-c87-1 ng-star-inserted"]', { visible: true })
        await newpage.type('#mat-input-0',RetiraMascara(cpf));
        await newpage.waitForSelector('div[class="mat-form-field-infix ng-tns-c67-2"]', { visible: true })
        await newpage.click('#mat-select-0')
        await delay(900);
        await newpage.click('#mat-option-2')
        await newpage.waitForSelector('input[class="mat-autocomplete-trigger mat-chip-input mat-input-element ng-untouched ng-pristine ng-valid"]');
        await newpage.click('input[id="mat-chip-list-input-0"]', {class:'mat-autocomplete-trigger mat-chip-input mat-input-element ng-pristine ng-valid ng-touched' });        
        await delay(2000);
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('ArrowDown');
        await newpage.keyboard.press('Enter');        
        await newpage.click('.mat-button-wrapper')[0];
        // certidao-viewer
        await newpage.waitForSelector('button[class="mat-focus-indicator button-add mdl-button mdl-js-button mdl-button--raised mdl-button--primary imprimir mat-raised-button mat-button-base mat-primary"]');
        await newpage.evaluate(() => {
            if(window.location.href ==='https://sistemas.trf1.jus.br/certidao/#/certidao'){
                document.getElementsByClassName('mat-focus-indicator button-add mdl-button mdl-js-button mdl-button--raised mdl-button--primary imprimir mat-raised-button mat-button-base mat-primary')[0].click();
            }
        });
    } catch (e){
        console.log('Ishh, Deu ruim!',e);
    }
})();
function delay(time){
    return new Promise(function (resolve){
        setTimeout(resolve,time);
    });
}