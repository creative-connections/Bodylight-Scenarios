import {PLATFORM} from 'aurelia-pal';

export class App {
  constructor() {
    this.style = 'position: absolute; left: 75%; top: 0%; width: 24%; height: 95%;';
    this.deg = 0;
    this.rotatestyle = '';
  }

  minimise() {
    this.style = 'position: absolute; left: 75%; top: 0%; width: 24%; height: 7%;overflow:hidden;';
  }

  normalise() {
    this.style = 'position: absolute; left: 75%; top: 0%; width: 24%; height: 95%;';
  }
  maximise() {
    this.style = 'position: absolute; left: 50%; top: 0%; width: 49%; height: 95%;';
  }

  rotate() {
    this.deg = this.deg + 45; if (this.deg >= 360) this.deg = 0;

    this.rotatestyle = 'transform:rotate(' + this.deg + 'deg);';
  }

  configureRouter(config, router) {
    config.title = 'Virtual Patient';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./pages/welcome'),
        nav: true,
        title: 'Dashboard',
        settings: {icon: 'fa fa-home'}
      },
      {
        route: ['apps', 'apps/*target'],
        name: 'apps',
        moduleId: PLATFORM.moduleName('./pages/apps'),
        nav: true,
        title: 'Free Style Simulator',
        settings: {icon: 'fa fa-male', icon2: 'fa fa-line-chart'}
      },
      /*{
        route: ['scenarios', 'scenarios/*target'],
        name: 'scenarios',
        moduleId: PLATFORM.moduleName('./pages/scenarios'),
        nav: true,
        title: 'Scenarios',
        settings: {icon: 'fa fa-male', icon2: 'fa fa-list-ol'}
      },*/
      {
        route: ['elearning', 'elearning/*target'],
        name: 'elearning',
        moduleId: PLATFORM.moduleName('./pages/elearning'),
        nav: true,
        title: 'E-Learning',
        settings: {icon: 'fa fa-male', icon2: 'fa fa-leanpub'}
      }, /*
      {
        route: 'physiomemodel',
        name: 'physiomemodel',
        moduleId: PLATFORM.moduleName('./pages/physiomemodel'),
        nav: true,
        title: 'Physiome Model',
        settings: {icon: 'fa fa-male', icon2: 'fa fa-tasks'}
      },*/
      {
        route: 'help',
        name: 'help',
        moduleId: PLATFORM.moduleName('./pages/help'),
        nav: true,
        title: 'Help',
        settings: {icon: 'fa fa-question-circle-o'}
      },
      {
        route: 'settings',
        name: 'settings',
        moduleId: PLATFORM.moduleName('./pages/settings'),
        nav: true,
        title: 'Settings',
        settings: {icon: 'fa fa-cog'}
      }
    ]);

    this.router = router;
  }
}
