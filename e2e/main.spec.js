'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('Welcome to Trimble Subscription App');
  });

  it('should list more than 5 awesome things', function () {
    //expect(page.thumbnailEls.count()).toBeGreaterThan(5);
  });

});
