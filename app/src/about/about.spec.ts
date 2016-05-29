import {
  it,
  describe,
  expect
} from '@angular/core/testing';
import {About} from './about';

describe('AboutComponent component', () => {
  it('should be able to create and onClickMe method', () => {
    var aboutComponent = new About();
    expect(aboutComponent).toBeDefined();
  });
});
