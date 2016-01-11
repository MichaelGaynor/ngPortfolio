let LayoutController = function($state) {
  
  let vm = this;
  var github = document.getElementById('fa-github');

  github.onclick = function() {
    window.location = "https://github.com/MichaelGaynor";
  };

  vm.menu = function() {
    // $state.go('root.home');
    var ul = document.getElementById('menu');
    ul.classList.toggle("nav");
  };

};

LayoutController.$inject = ['$state'];

export default LayoutController;