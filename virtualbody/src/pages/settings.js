import {Virtualbodyapi} from '../components/virtualbodyapi';
import {inject} from 'aurelia-framework';

@inject(Virtualbodyapi)
export class Settings {
constructor(api){
  this.api = api;
}

}
