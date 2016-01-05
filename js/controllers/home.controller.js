let HomeController = function($state) {
  
  let vm = this;
  vm.title = "Web";
  vm.title2 = "Design";

  vm.goWeb = function() {
    $state.go('root.web');
  };

  vm.goDesign = function() {
    $state.go('root.design');
  };

};

HomeController.$inject = ['$state'];

export default HomeController;