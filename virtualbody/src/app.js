import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./pages/welcome'),
        nav: true,
        title: 'Welcome',
        settings:{icon:'fa fa-home'}
      },
      {
        route: 'Apps',
        name: 'apps',
        moduleId: PLATFORM.moduleName('./pages/apps'),
        nav: true,
        title: 'Applications',
        settings:{icon:'fa fa-file-text-o'}
      },
      {
        route: 'physiomemodel',
        name: 'physiomemodel',
        moduleId: PLATFORM.moduleName('./pages/physiomemodel'),
        nav: true,
        title: 'Physiome Model',
        settings:{icon:'fa fa-file-image-o'}
      }
    ]);

    this.router = router;
  }
}
