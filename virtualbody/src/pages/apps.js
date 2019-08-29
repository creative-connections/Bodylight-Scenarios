import {I18N} from 'aurelia-i18n';
import {Virtualbodyapi} from '../components/virtualbodyapi';
import {inject} from 'aurelia-framework';

@inject(Virtualbodyapi)
export class Apps {

  constructor(api){
    this.api=api;
    let synth = window.speechSynthesis;
    this.ap1src="";
    this.ap2src="";
    this.showap1=false;
    this.showap2=false;
  }

  attached(){
//speech initialization moved to virtualbodyapi
  }

  activate(params, routeConfig, navigationInstruction){
    //parses params in url in form http://localhost/virtualbody/#/apps/ap1=kidney&ap2=heart
    if (params.target) {
      console.log('home activate()',params.target)
      let kv = params.target.split('&');
      for (let kvitem of kv) {
        let keyvalue = kvitem.split('=');
        if (keyvalue[0]==='ap1') this.toggleapp(0,keyvalue[1]); else
        if (keyvalue[0]==='ap2') this.toggleapp(1,keyvalue[1]); else
        this.toggleapp(0,keyvalue[1]);
        // console.log('api target',this.api.target);
      }
    } else {
      //no params = send message to potential window opener - listener in login.js which closes the popup
      if (window.opener) window.opener.postMessage('b2note home opened', "*");
    }
  }

  toggleapp(position,what)
  {
    console.log('toggleapp position,what:',position,what)
    if (position===0) { this.ap1src=what+'.html';  this.showap1=!this.showap1; if (this.showap1) this.speakreport(what)}
    if (position===1) { this.ap2src=what+'.html'; this.showap2=! this.showap2; if (this.showap2) this.speakreport(what)}

  }

  summary(){
    this.api.speaktran('summary')
  }

  speakreport(what){
    console.log('speakreport, what, report',what)
    //this.utter.text = this.report[what];
    this.api.speaktran(what);
  }

}
