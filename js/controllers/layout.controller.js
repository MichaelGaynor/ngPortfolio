let LayoutController = function() {
  
  let vm = this;
  // var github = document.getElementById('fa-github');
  var linkedin = document.getElementById('fa-linkedin');

  linkedin.onclick = function() {
    window.location = "https://www.linkedin.com/in/michael-gaynor-3997b123";
  };

  // github.onclick = function() {
  //   window.location = "https://github.com/MichaelGaynor";
  // };

  vm.menu = function() {
    var ul = document.getElementById('menu');
    ul.classList.toggle("nav");
  };

};

LayoutController.$inject = [];

export default LayoutController;