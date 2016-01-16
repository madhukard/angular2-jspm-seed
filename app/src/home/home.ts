import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
  selector: 'home',
  templateUrl: 'src/home/home.html',
  directives: [MATERIAL_DIRECTIVES]
})
export class Home {
  constructor() {

  }
}
