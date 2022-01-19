const puppeteer = require('puppeteer');


(async function(){
    try{
        const browser = await puppeteer.launch({
            headless:false,
            ignoreHTTPSErrors:false,
            defaultViewport: null
        });
        let link ='https://sistemas.trf1.jus.br/certidao/#/solicitacao';
        let cpf ='07037829161';

        const page = await browser.newPage();
        

        await page.goto(link,{waitUntil: 'load'});
        await page.waitForSelector('div[class="mat-form-field-infix ng-tns-c66-3"]', { visible: true })
        await page.type('#mat-input-0',cpf);
        await page.waitForSelector('div[class="mat-form-field-infix ng-tns-c66-0"]', { visible: true })
        await page.click('#mat-select-0')
        await page.click('#mat-option-2')
        await page.waitForSelector('input[class="mat-autocomplete-trigger mat-chip-input mat-input-element ng-untouched ng-pristine ng-valid"]');
        await page.click('input[id="mat-chip-list-input-0"]', {class:'mat-autocomplete-trigger mat-chip-input mat-input-element ng-pristine ng-valid ng-touched' })
        await new Promise(resolve => setTimeout(resolve, 900));
        await page.evaluate(() => {
            document.getElementsByClassName('mat-option-text')[16].click()
            // let elements = $('.mat-option-text').toArray();
            // for (i = 0; i < elements.length; i++) {
            //   $(elements[16]).click();
            // }
        });
        await page.click('.mat-button-wrapper')[0];
        // certidao-viewer
        await page.waitForSelector('button[class="mat-focus-indicator button-add mdl-button mdl-js-button mdl-button--raised mdl-button--primary imprimir mat-raised-button mat-button-base mat-primary"]');
        
        
        await page.evaluate(() => {
            if(window.location.href ==='https://sistemas.trf1.jus.br/certidao/#/certidao'){
                document.getElementsByClassName('mat-focus-indicator button-add mdl-button mdl-js-button mdl-button--raised mdl-button--primary imprimir mat-raised-button mat-button-base mat-primary')[0].click();

            }
        // await page.goto('https://sistemas.trf1.jus.br/certidao/#/solicitacao')
            
        });


        
        
          
        
    
        
    
        
    
    } catch (e){
        console.log('Ishh, Deu ruim!',e);
    }

})();