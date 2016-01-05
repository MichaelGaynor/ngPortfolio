let LayoutController = function($state) {
  
  let vm = this;

  vm.goHome = function() {
    $state.go('root.home');
  };

};

LayoutController.$inject = ['$state'];

export default LayoutController;