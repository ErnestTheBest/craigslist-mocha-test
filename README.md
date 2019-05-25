# craigslist.org test suite
A demo test suite for craigslist.org

## Disclamer
This setup requires **node 10.0.0+** to run

## How to run
1. Setup
    * Chromedriver
        * Check Chrome version that's installed on your computer.
        * Refer to [chromedriver version list](http://chromedriver.chromium.org/downloads) to pick correct version for you.
        * Adjust package.json _**chromedriver**_ dependency with correct version from [this list](https://www.npmjs.com/package/chromedriver) of versions.
        * Use `npm run chromedriver:start` to start chromedriver on port _4444_
    * Selenium server
        * Requires JVM to run
        * Check browsers version that's installed on your computer.
        * Pick correct versions of chromedriver, geckodriver, ie, edge drivers that you want to use.
        * Adjust _./config/selenium-standalone-config.js_ with correct driver versions.
        * Use `npm run server:start` to run local selenium server.
            * Note: server starts by default on http://localhost:4444/wd/hub. You might need to adjust _./wdio.conf.js_ with correct path.  
1. Running
    * Once setup is complete, just use `npm run test` to run tests
    
## Useful links
* Mocha test runner [documentation](https://mochajs.org/#features).
* WebdriverIO test runner [configuration documentation](https://webdriver.io/docs/configurationfile.html).
* WebdriverIO API [documentation](https://webdriver.io/docs/api.html).