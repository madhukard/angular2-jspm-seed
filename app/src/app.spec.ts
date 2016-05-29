import 'reflect-metadata';
import 'es6-shim';
import {
  it,
  describe,
  expect
} from '@angular/core/testing';
import {AppComponent} from './app';

describe('AppComponent component', () => {
  it('should be able to create', () => {
    let routerMock = {
      subscribe: function() {
      }
    };

    let translateMock = {
      useStaticFilesLoader: function() {

      },
      use: function() {

      }
    };
    // noinspection TypeScriptValidateTypes
    var appComponent = new AppComponent(routerMock, translateMock);
    expect(appComponent).toBeDefined();
  });
});
