import 'reflect-metadata';
import {About} from './about';

describe('HomeComponent component', () => {
  it('should be able to create and onClickMe method', () => {
    var aboutComponent = new About();
    expect(aboutComponent).toBeDefined();
    expect(aboutComponent.clickMessage).toEqual('');
    aboutComponent.onClickMe();
    expect(aboutComponent.clickMessage).toEqual('You are my hero!');
  });
});
