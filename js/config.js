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
    ; 

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;