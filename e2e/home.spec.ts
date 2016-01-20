import {HomePageObject} from './pageobjects/home.pageobject';

describe('Home Page', () => {
  var home: HomePageObject = new HomePageObject();

  beforeEach(function() {
    browser.get('/home');
  });

  it('should have table', function() {
    expect(home.tabs.isPresent()).toBeTruthy();
  });
});
