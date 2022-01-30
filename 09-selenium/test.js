const assert = require('assert');
const test = require('selenium-webdriver/testing');
const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const { WebElement } = require('selenium-webdriver');

test.describe('Adslot website', () => {
  // Browser (or driver) instance
  let browser = null;
  // Init browser before we begin
  test.before(() => {
    browser = new webdriver.Builder()
      .usingServer()
      .withCapabilities({
        browserName: 'chrome',
      })
      .build();
  });
  // Close browser after all tests
  test.after(() => {
    browser.quit();
  });

  test.it('should have 6 offices on About Us page', () => {
    browser.get('https://www.adslot.com/adslot-about/#locations')
    browser.findElements(By.css('.wpb_column.vc_column_container.vc_col-sm-3'))
      .then((menuItems) => {
        assert(menuItems.length, 6);
      });
  });

  test.it('should contain a form on "contact us" page for request-demo', () => {
    browser.get('http://www.adslot.com/contact-us');
    browser.findElement(webdriver.By.xpath("//a[@href='#request-demo']"));
    browser.findElement(webdriver.By.id('input_2_1')).isDisplayed();
    browser.findElement(webdriver.By.id('input_2_2')).isDisplayed();
    browser.findElement(webdriver.By.id('input_2_3')).isDisplayed();
    browser.findElement(webdriver.By.id('input_2_4')).isDisplayed();
    browser.findElement(webdriver.By.id('input_2_5')).isDisplayed();
    browser.findElements(By.name('input_6'));
    browser.findElement(webdriver.By.id('gform_submit_button_2')).isDisplayed();
  });

  test.it('should pick first link from google and validate title of the page', () => {
    browser.get('https://www.google.com/');
    elt = browser.findElement(By.name("q"));
    elt.sendKeys("Adslot\n")

    browser.findElement(By.css('.iUh30.tjvcx')).click();
    browser.findElement(webdriver.By.css(".css-zkpwio")).click();
    browser.getTitle().then(function (wtitle) {
      if (wtitle == 'Adslot') {
        console.log("Title matched", wtitle);
      }
      else {
        console.log("Title not matched");
      }
    });
  });

  test.it('should contain a form on "contact us" page for sales', () => {
    browser.get('http://www.adslot.com/contact-us');
    browser.findElement(webdriver.By.xpath("//a[@href='#sale']"));
    browser.findElement(webdriver.By.id('input_3_1')).isDisplayed();
    browser.findElement(webdriver.By.id('input_3_2')).isDisplayed();
    browser.findElement(webdriver.By.id('input_3_3')).isDisplayed();
    browser.findElement(webdriver.By.id('input_3_4')).isDisplayed();
    browser.findElement(webdriver.By.id('input_3_6_chosen')).isDisplayed();
    browser.findElements(By.name('input_8'));
    browser.findElement(webdriver.By.id('gform_submit_button_3')).isDisplayed();
  });

  test.it('should contain a form on "contact us" page for webinar', () => {
    browser.get('http://www.adslot.com/contact-us');
    browser.findElement(webdriver.By.id('input_7_1_chosen')).isDisplayed();
    browser.findElement(webdriver.By.id('input_7_35_chosen')).isDisplayed();
    browser.findElement(webdriver.By.id('input_7_36_chosen')).isDisplayed();
    browser.findElement(webdriver.By.id('gform_submit_button_7')).isDisplayed();
  });

});
