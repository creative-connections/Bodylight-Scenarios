import {I18N} from 'aurelia-i18n';
import {Virtualbodyapi} from '../components/virtualbodyapi';
import {inject} from 'aurelia-framework';

@inject(Virtualbodyapi)
export class Apps {

  constructor(api){
    this.api=api;
    let synth = window.speechSynthesis;

    this.ap1deg=0;
    this.ap2deg=0;
    this.ap1src="";
    this.ap1style="position: fixed; left: 5%; top: 55%; width: 28%; height: 45%; background-color: rgba(250, 250, 250, 0.9);border-radius:10px;"

    this.ap2src="";
    this.ap2style="position: fixed; left: 37%; top: 55%; width: 28%; height: 45%; background-color: rgba(250, 250, 250, 0.9);border-radius:10px;"
    this.showap1=false;
    this.showap2=false;
    window.addEventListener( 'mark', this.onMark );
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

  onMark(event){
    console.log("onMark event",event);
    console.log("onMark eventname",event.name);
  }

  rotateap1(){
    //this.before= this.style;
    console.log('rotateap1')
    this.ap1deg=this.ap1deg+90; if (this.ap1deg>=360) this.ap1deg=0;
    if (!this.ap1style.includes('transform')) this.ap1beforestyle=this.ap1style;
    this.ap1style=this.ap1beforestyle+"transform:rotate("+this.ap1deg+"deg);"
  }

  rotateap2(){
    //this.before= this.style;
    console.log('rotateap2')
    this.ap2deg=this.ap2deg+90; if (this.ap2deg>=360) this.ap2deg=0;
    if (!this.ap2style.includes('transform')) this.ap2beforestyle=this.ap2style;
    this.ap2style=this.ap2beforestyle+"transform:rotate("+this.ap2deg+"deg);"
  }

}
