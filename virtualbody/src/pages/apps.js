export class Apps {

  constructor(){
    let synth = window.speechSynthesis;
    this.ap1src="";
    this.ap2src="";
    this.showap1=false;
    this.showap2=false;
  }

  attached(){
    this.available_voices =[];

// list of languages is probably not loaded, wait for it
    if(window.speechSynthesis.getVoices().length == 0) {
      window.speechSynthesis.addEventListener('voiceschanged', function() {
        this.available_voices = window.speechSynthesis.getVoices();
      });
    }
    else {
      this.available_voices = window.speechSynthesis.getVoices();
    }
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
    if (position===0) { this.ap1src=what+'.html';  this.showap1=!this.showap1;}
    if (position===1) {this.ap2src=what+'.html'; this.showap2=! this.showap2;}
  }

  speak() {
    // new SpeechSynthesisUtterance object
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.text = 'Good morning doctor Koolhaaneck. Patient, Mr. Smith, age 41,  is currently stable and vital signs are within normal limits.';
    if (this.available_voices.length>1) utter.voice = this.available_voices[1];
      else utter.voice = this.available_voices[0];

    // event after text has been spoken
/*    utter.onend = function() {
      alert('Speech has finished');
    }
*/
    // speak
    window.speechSynthesis.speak(utter);
  }

}
