exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 9515,
    path: '/',
    specs: [
        './src/test/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    baseUrl: 'http://localhost',
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['chromedriver'],
    chromeDriverArgs: ['--port=9515', '--url-base=\'/\''], // default for ChromeDriver
    framework: 'mocha',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    reporters: ['spec', 'allure'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
