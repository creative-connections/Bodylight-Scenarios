import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Virtual Patient';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./pages/welcome'),
        nav: true,
        title: 'Dashboard',
        settings:{icon:'fa fa-home'}
      },
      {
        route: ['apps','apps/*target'],
        name: 'apps',
        moduleId: PLATFORM.moduleName('./pages/apps'),
        nav: true,
        title: 'Free Style Simulator',
        settings:{icon:'fa fa-male', icon2:'fa fa-line-chart'}
      },
      {
        route: ['scenarios','scenarios/*target'],
        name: 'scenarios',
        moduleId: PLATFORM.moduleName('./pages/scenarios'),
        nav: true,
        title: 'Scenarios',
        settings:{icon:'fa fa-male', icon2:'fa fa-list-ol'}
      },
      {
        route: 'physiomemodel',
        name: 'physiomemodel',
        moduleId: PLATFORM.moduleName('./pages/physiomemodel'),
        nav: true,
        title: 'Physiome Model',
        settings:{icon:'fa fa-male', icon2:'fa fa-tasks'}
      },
      {
        route: 'settings',
        name: 'settings',
        moduleId: PLATFORM.moduleName('./pages/settings'),
        nav: true,
        title: 'Settings',
        settings:{icon:'fa fa-cog'}
      }

    ]);

    this.router = router;
  }
}
