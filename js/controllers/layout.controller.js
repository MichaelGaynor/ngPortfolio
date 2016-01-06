let LayoutController = function($state) {
  
  let vm = this;
  var github = document.getElementById('fa-github');

  github.onclick = function() {
    window.location = "https://github.com/MichaelGaynor";
  };

  vm.goHome = function() {
    $state.go('root.home');
  };

};

LayoutController.$inject = ['$state'];

export default LayoutController;