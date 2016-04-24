import {AppComponent} from './app';
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

// noinspection TypeScriptCheckImport
import {TranslateLoader, TranslateStaticLoader, TranslateService} from 'ng2-translate/ng2-translate';

// noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(TranslateLoader, {
    useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
    deps: [Http]
  }),
  TranslateService
]).catch(err => console.error(err));
