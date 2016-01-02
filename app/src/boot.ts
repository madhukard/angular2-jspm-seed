"use strict";

import 'reflect-metadata';
import 'es6-shim';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'bootstrap/css/bootstrap-theme.css!';
import 'bootstrap-material-design';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css!';
import 'bootstrap-material-design/dist/css/ripples.css!';
import 'assets/app.css!';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
  .catch(err => console.error(err));