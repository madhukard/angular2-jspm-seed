import {Component} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
  selector: 'about',
  templateUrl: 'src/about/about.html',
  providers: [],
  directives: [],
  pipes: []
})
export class About {
  constructor(http:Http) {

  }
}