module.exports = {
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
};
