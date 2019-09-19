import {Virtualbodyapi} from '../components/virtualbodyapi';
import {I18N} from 'aurelia-i18n';
import {inject} from 'aurelia-framework';

@inject(Virtualbodyapi,I18N)
export class Settings {

  constructor(api,i18n){
    this.api = api;
    this.i18n = i18n;
  }

  attached(){
    this.voices = this.api.available_voices;

  }
  setEnglish(){
    this.i18n.setLocale('en')

  }
  setCzech(){
    this.i18n.setLocale('cs')
  }

  testvoice(){
    this.api.speak('Virtuální pacient česky. Virtual patient in english.')
  }

}
