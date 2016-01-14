import angular from 'angular';
import 'angular-ui-router';

import config from './config'; 

import HomeController from './controllers/home.controller';
import LayoutController from './controllers/layout.controller';
import WebController from './controllers/web.controller';
import DesignController from './controllers/design.controller';
import BioController from './controllers/bio.controller';
import ContactController from './controllers/contact.controller';
import ResumeController from './controllers/resume.controller';

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('LayoutController', LayoutController)
  .controller('WebController', WebController)
  .controller('DesignController', DesignController)
  .controller('BioController', BioController)
  .controller('ContactController', ContactController)
  .controller('ResumeController', ResumeController)
;