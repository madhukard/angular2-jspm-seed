/**
 * Configuration for running e2e tests with Protractor.
 */
exports.config = {
  framework: 'jasmine2',
  useAllAngular2AppRoots: true,

  baseUrl: 'http://localhost:3000/',

  suites: {
    security: [
      '../target/e2e/security/login.e2e.js',
      '../target/e2e/security/my_account.e2e.js',
      '../target/e2e/security/organizations.e2e.js',
      '../target/e2e/security/users.e2e.js',
      '../target/e2e/security/data_collectors.e2e.js'
    ]
  },

  // Specific options for jasmine.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000
  },

  onPrepare: function() {
    setTimeout(function() {
      browser.driver.executeScript(function() {
        return {
          width: window.screen.availWidth,
          height: window.screen.availHeight
        };
      }).then(function(result) {
        browser.driver.manage().window().setSize(result.width - 40, result.height - 40);
      });
    });
  }
};