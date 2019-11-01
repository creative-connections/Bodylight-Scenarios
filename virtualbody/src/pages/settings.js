import {Virtualbodyapi} from '../components/virtualbodyapi';
import {I18N} from 'aurelia-i18n';
import {inject} from 'aurelia-framework';

@inject(Virtualbodyapi, I18N)
export class Settings {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }

  attached() {
    //console.log('settings 1')
    if (this.api.available_voices.length === 0 ) {
      this.api.initvoices();
    }
    this.voices = this.api.available_voices;
    this.locale = this.i18n.getLocale();
    this.getpixelratio = this.api.getPixelRatio();
  }

  setEnglish() {
    this.i18n.setLocale('en');
    this.locale = this.i18n.getLocale();
  }
  setCzech() {
    this.i18n.setLocale('cs');
    this.locale = this.i18n.getLocale();
  }

  testvoice() {
    this.api.speak('Virtuální pacient česky. Virtual patient in english.');
  }

  setPixelRatio() {
    this.api.setPixelRatio(this.pixelratio);
    this.getpixelratio = this.api.getPixelRatio();
  }
}
