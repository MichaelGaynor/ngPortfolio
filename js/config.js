let config = function($stateProvider, $urlRouteProvider) {
  
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
    ; 

};

config.$inject = ['$stateProvider', '$urlRouteProvider'];

export default config;