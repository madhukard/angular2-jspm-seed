import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
  selector: 'about',
  templateUrl: 'src/about/about.html',
  directives: [MATERIAL_DIRECTIVES]
})
export class About {
  clickMessage = '';
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
