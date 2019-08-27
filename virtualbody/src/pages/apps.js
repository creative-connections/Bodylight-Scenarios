export class Apps {

  constructor(){
    let synth = window.speechSynthesis;
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
    this.speak();
  }

  speak() {
    // new SpeechSynthesisUtterance object
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.text = 'Good morning doctor Kulhaaneck. Patient, Mr. Smith, age 41, he is currently stable and vital sings are within normal limits.';
    utter.voice = this.available_voices[0];

    // event after text has been spoken
    utter.onend = function() {
      alert('Speech has finished');
    }

    // speak
    window.speechSynthesis.speak(utter);
  }

}
