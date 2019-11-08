//import {Converter} from 'showdown';
import * as marked from 'marked';
import {I18N} from 'aurelia-i18n';
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {Virtualbodyapi} from '../components/virtualbodyapi';

// https://raw.githubusercontent.com/wiki/creative-connections/Bodylight-Scenarios/
@inject(I18N, HttpClient, Virtualbodyapi)

export class Scenarios {
  constructor(i18n, client, api) {
    this.i18n = i18n;
    this.httpclient = client;
    this.api = api;

    this.scenariourl = this.api.scenariourlprefix + 'Home.cs.md';
    //this.marked = import 'marked';
  }

  activate(params, routeConfig, navigationInstruction) {
    //parses params in url
    if (params.target) {
      console.log('loading:', params.target);
      this.scenariourl = this.api.scenariourlprefix + params.target + '.md';//TODO file suffix may change
    } else { //if no params - default home per locale is loaded
      this.scenariourl = this.api.scenariourlprefix + ((this.i18n.getLocale() === 'cs') ? 'Home.cs.md' : 'Home.en.md');
    }
    console.log('loading from url:', this.scenariourl);
    this.httpclient.fetch(this.scenariourl)
      .then(response => response.text())
      .then(text => {
        this.html = marked(text, {baseUrl: '#/scenarios/', baseImgUrl: this.api.scenariourlprefix});
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  attached() {
  }
}

