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
    //this.navigationurl = this.api.scenariourlprefix + 'SUMMARY.cs.md';
    //this.marked = import 'marked';
    this.navigation = null;
    this.prevurl=this.nexturl="";
  }

  activate(params, routeConfig, navigationInstruction) {
    //parses params in url
    if (params.target) {
      console.log('loading:', params.target);
      this.scenariourl = this.api.scenariourlprefix + params.target + '.md';//TODO file suffix may change
      this.currenttitle = params.target;
    } else { //if no params - default home per locale is loaded
      this.currenttitle = ((this.i18n.getLocale() === 'cs') ? 'Home.cs.md' : 'Home.en.md');
      this.scenariourl = this.api.scenariourlprefix + this.currenttitle;
    }
    console.log('loading from url:', this.scenariourl);
    this.httpclient.fetch(this.scenariourl)
      .then(response => response.text())
      .then(text => {
        if (!params.target) {this.navigation = text;} //default home = navigation
        this.generateNavigation();

        this.html = marked(text, {baseUrl: '#/scenarios/', baseImgUrl: this.api.scenariourlprefix});
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  attached() {

  }
  generateNavigation() {
    if (this.navigation) {
      //find currenttitle in text, previous link is preurl next link is nexturl
      if (!this.linkrows) {
        this.linkrows = this.navigation.split('*');
        this.links = this.linkrows.map(x => {
          let y = x.match(/\(([^\)]+)\)/); //match content between brackets
          if (y) return y[1];  // returns content between brackets
          return ''; // or empty
        });
      } //links should contain something like ["","first.md","second.md","third.md"]
      let i = this.links.indexOf(this.currenttitle)
      if (i === 0  || i === -1) {this.prevurl = ''; this.nexturl = this.links[1];} //homepage returns -1, thus next should be 1,
      else {
        if (i > 0) this.prevurl = this.links[i - 1];
        if (i < this.links.length) this.nexturl = this.links[i + 1];
      }
      console.log('generateNavigation links,i,prevurl nexturl', this.links, i, this.prevurl, this.nexturl);
    }
  }
}

