exports.config = {
  runner: 'local',
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  services: ['selenium-standalone'],
  seleniumLogs: './selenium-server-logs/',
  seleniumInstallArgs: {
    baseURL: 'https://selenium-release.storage.googleapis.com',
    version: '3.141.5',
    drivers: {
      chrome: {
        version: '74.0.3729.6',
        arch: process.arch,
        baseURL: 'https://chromedriver.storage.googleapis.com'
      },
      ie: {
        version: '3.14.0',
        arch: process.arch,
        baseURL: 'https://selenium-release.storage.googleapis.com'
      },
      firefox: {
        version: '0.24.0',
        arch: process.arch,
        baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
      },
      edge: {
        version: '17134'
      }
    }
  },
  seleniumArgs: {
    version: '3.141.5',
    drivers: {
      chrome: {
        version: '74.0.3729.6',
        arch: process.arch,
      },
      ie: {
        version: '3.14.0',
        arch: process.arch,
      },
      firefox: {
        version: '0.24.0',
        arch: process.arch,
      },
      edge: {
        version: '17134'
      }
    }
  },
  specs: [
    './src/test/specs/**/*.js'
  ],
  // For parallel test execution
  maxInstances: 10, // max instances across all browsers
  capabilities: [
    {
      maxInstances: 5, // Max instances for each browser
      browserName: 'chrome'
    },
    {
      maxInstances: 5, // Max instances for each browser
      browserName: 'firefox'
    }],
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'silent',
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
