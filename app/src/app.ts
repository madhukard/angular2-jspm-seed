import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from 'ng2-material/all';

import {Home} from './home/home';
import {About} from './about/about';


@Component({
  selector: 'my-app',
  providers: [],
  templateUrl: 'src/app.html',
  directives: [MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  new Route({ path: '/home', component: Home, name: 'Home', useAsDefault: true}),
  new Route({ path: '/about', component: About, name: 'About'})
])
export class AppComponent {
  location: Location;
  currentPathStr = '';

  constructor(location: Location, router: Router) {
    this.location = location;
    this.currentPathStr = '/home';
    router.subscribe((value) => this.currentPathStr = value);
  }

  clicked(message: string) {
    console.log(message);
  }
}
