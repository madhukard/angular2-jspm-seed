"use strict";

import 'assets/app.css!';
import 'bootstrap/css/bootstrap.css!';
import 'bootstrap/css/bootstrap-theme.css!';
import 'assets/material-icons.css!';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css!';
import 'bootstrap-material-design/dist/css/ripples.css!';

import 'reflect-metadata';
import 'es6-shim';
import 'bootstrap';
import 'bootstrap-material-design';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';


import {AppComponent} from './app.component';

//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
  .catch(err => console.error(err));