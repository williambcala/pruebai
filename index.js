const {Browser, Builder, By} = require("selenium-webdriver");
const Chrome = require("selenium-webdriver/chrome");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const start = async () => {
    let driver = null;
     try{
        const chromeOptions = new Chrome.Options();
        //chromeOptions.headless();
        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(chromeOptions).build();
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

        const textInput = await driver.findElement(By.id('my-text-id'));
        await textInput.sendKeys('Este es mi texto desde selenium textinput');

        await delay(2000);

        //anita lava la tina

        const textArea = await driver.findElement(By.css('textarea[name="my-textarea"]'));
        await textArea.sendKeys('Anita lava la tina');

        await delay(2000);

        //seleción 3
        const selectElement = await driver.findElement(By.css('select.form-select[name="my-select"]'));
        const optionThree = await selectElement.findElement(By.css('option[value="3"]'));
        await delay(2000);
        await optionThree.click();

        await delay(2000);
        //color 
        const colorPicker = await driver.findElement(By.css('input[type="color"][name="my-colors"]'));
        await colorPicker.click();

        await delay(2000);

        await colorPicker.sendKeys("#20A722"); 

        await delay(2000);
       
         // 4.En el campo Datepicker seleccione la fecha:  16 de agosto de 1970.
        const datepicker = await driver.findElement(By.css('input[name="my-date"]'));
        await datepicker.click();

        await delay(2000);

        await datepicker.sendKeys("08/16/1970");
        await datepicker.click();

        await delay(2000);
        //5. Chequee el campo Default checkbox.
        const checkbox = await driver.findElement(By.id('my-check-2'));
        await checkbox.click();

        await delay(2000);

       //6 submit
        
        const submit = await driver.findElement(By.css('button[type="submit"]'));
        await delay(2000);
        await submit.click();

        await delay(2000);

        // 7 titlle form console

        const textResult = await driver.findElement(By.css('h1[class="display-6"]'));
        const textValue = await textResult.getText();
        await delay(2000);
        
        console.log(textValue);

        await delay(2000);
        // mensaje recibido
        const messageReceived = await driver.findElement(By.id('message'));
        const message = await messageReceived.getText();
        
        console.log(message);
    }catch (error){
        console.error(error);
    } finally{
        if(driver !== null){
            // await driver.quit();
        }
    }
}

start()
