let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      controller: 'LayoutController as vm',
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.web', {
      url: '/web',
      controller: 'WebController as vm',
      templateUrl: 'templates/web.tpl.html'
    })
    .state('root.design', {
      url: '/design',
      controller: 'DesignController as vm',
      templateUrl: 'templates/design.tpl.html'
    })
    .state('root.bio', {
      url: '/bio',
      controller: 'BioController as vm',
      templateUrl: 'templates/bio.tpl.html'
    })
    .state('root.contact', {
      url: '/contact',
      controller: 'ContactController as vm',
      templateUrl: 'templates/contact.tpl.html'
    })
    .state('root.resume', {
      url: '/resume',
      controller: 'ResumeController as vm',
      templateUrl: 'templates/resume.tpl.html'
    })
    ; 

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;