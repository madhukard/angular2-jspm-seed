import {Component} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
  selector: 'about',
  templateUrl: 'src/about/about.html'
})
export class About {
  clickMessage = '';
  onClickMe() {
    this.clickMessage ='You are my hero!';
  }
}