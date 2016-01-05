import 'reflect-metadata';
import 'es6-shim';
import {AppComponent} from './app.ts';

describe('AppComponent component', () => {
  it('should be able to create', () => {
    var routerMock = {
      subscribe: function() {
      }
    };
    //noinspection TypeScriptValidateTypes
    var appComponent = new AppComponent(null, routerMock);
    expect(appComponent).toBeDefined();
  });
});
