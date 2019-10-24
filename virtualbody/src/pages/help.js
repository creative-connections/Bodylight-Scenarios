import helpentext from 'raw-loader!./help.en.md';
import helpcstext from 'raw-loader!./help.cs.md';
import {Converter} from 'showdown';
import {I18N} from 'aurelia-i18n';
import {inject} from 'aurelia-framework';

@inject(I18N)
export  class Help {
  constructor(i18n) {
    this.i18n = i18n;
  }
  attached() {
    this.converter = new Converter();
    this.text = (this.i18n.getLocale() === 'cs') ? helpcstext : helpentext;
    this.html = this.converter.makeHtml(this.text);
  }
}
