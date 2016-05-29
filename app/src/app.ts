import {Component} from '@angular/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

// noinspection TypeScriptCheckImport
import {MdButton} from '@angular2-material/button';
// noinspection TypeScriptCheckImport
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
// noinspection TypeScriptCheckImport
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
// noinspection TypeScriptCheckImport
import {MdToolbar} from '@angular2-material/toolbar';

// noinspection TypeScriptCheckImport
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

import {Home} from './home/home';
import {About} from './about/about';

@Component({
  selector: 'my-app',
  providers: [],
  templateUrl: 'src/app.html',
  styleUrls: ['src/app.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar
  ],
  pipes: [TranslatePipe]
})
@RouteConfig([
  new Route({ path: '/home', component: Home, name: 'Home', useAsDefault: true}),
  new Route({ path: '/about', component: About, name: 'About'})
])
export class AppComponent {
  currentPathStr = '';
  
  constructor(router: Router, translate: TranslateService) {
    this.currentPathStr = '/home';
    router.subscribe((value) => this.currentPathStr = value);
    translate.use('en');
  }
}
