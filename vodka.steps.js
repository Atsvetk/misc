require('../../glob')
let world = require('./../support/world');
let basicSearchPage = require('./../../pageObjects/search/basic.search.page');
const { Given, When, Then, And } = require('cucumber');

/**
 * I click on {string} button
 * @param {string} btnName
  */
When('I click on {string} button', async function (btnName) {
    await element(by.css('ul.els-header-content__navigation')).element(by.cssContainingText('li > a', btnName)).click()
});

/**
 * Super gherkin 2
 * @param {string} partUrl
 */
Then('I get {string} URL', async function (partUrl) {
    expect(await browser.getCurrentUrl()).to.equal(config.webserver + partUrl)
});

/**
 * Super gherkin 3
 * @param {int} seconds
 */
Then('Browser sleeps for {int} seconds', async function (seconds) {
    await browser.sleep(seconds*1000)
});

Given('I try to write some code', async function(){
    await browser.get(config.webserver);
    console.log(await basicSearchPage.header.main.getText())
    console.log(await basicSearchPage.mainest.getAttribute('class'))
})