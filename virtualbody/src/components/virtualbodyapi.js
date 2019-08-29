/**
 * Virtualbodyapi class to serve shared functionality and properties.
 * in order to share properties, it's instance must be injected as singleton by aurelia-framework
 * using e.g.:
 * <code>
 * import {Virtualbodyapi} from '../components/virtualbodyapi';
 * import {inject} from 'aurelia-framework';
 *   @inject(Virtualbodyapi)
 *   export class Myclass {
 *      constructor(api) {
 *        this.api = api
 *      }
 *      mymethod(){
 *          //now Virtualbodyapi methods can be called or shared properties can be retrieved
 *          this.api.getUserInfo()
 *      }
 *   }
 *</code>
 * @author Tomas Kulhanek <https://github.com/TomasKulhanek>
 */
import {I18N} from 'aurelia-i18n';
import {inject} from 'aurelia-framework';

@inject(I18N)
export class Virtualbodyapi {
constructor(i18n){
  this.i18n=i18n;
  this.available_voices =[];

// list of languages is probably not loaded, wait for it
  if(window.speechSynthesis.getVoices().length == 0) {
    window.speechSynthesis.addEventListener('voiceschanged', function() {
      this.available_voices = window.speechSynthesis.getVoices();
    });
  }
  else {
    this.available_voices = window.speechSynthesis.getVoices();
    console.log('voices:',this.available_voices);
  }
  this.utter = {}//new SpeechSynthesisUtterance();
  this.utter.rate = 1;
  this.utter.pitch = 1;
  let my_voice = '';

  // find voice by language locale "en-US"
  // if not then select the first voice
  for(var i=0; i<this.available_voices.length; i++) {
    if(this.available_voices[i].lang === 'cs-CZ') {
      my_voice = this.available_voices[i];
      break;
    }
  }
  if(my_voice === '')
    my_voice = this.available_voices[0];

  this.utter.voice=my_voice;
}

  /**
   * Speaks text using the selected voice
   * @param text
   */
  speak(text) {
    let utter = new SpeechSynthesisUtterance();
    utter.rate = this.utter.rate;
    utter.pitch = this.utter.pitch;
    utter.voice = this.utter.voice;
  console.log('speak text:',text)
    utter.text = text;
    // this will hold a selected voice
    window.speechSynthesis.speak(utter);
  }

  /**
   * Translate and speak sentence on translated text
   * @param key
   */
  speaktran(key){
    this.speak(this.i18n.tr(key));
  }

}
