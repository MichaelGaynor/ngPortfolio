let WebController = function() {
  
  var auditioncity = document.getElementById('auditioncity');
  var contactapp = document.getElementById('contactapp');
  var sampleapp = document.getElementById('sample1');
  var samplecontactapp = document.getElementById('sample2');

  auditioncity.onclick = function() {
    window.location = "http://auditioncity.surge.sh/#/login";
  };
  contactapp.onclick = function() {
    window.location = "http://violet-train.surge.sh/";
  };
  sampleapp.onclick = function() {
    window.location = "http://caring-gun.surge.sh/#/";
  };
  samplecontactapp.onclick = function() {
    window.location = "http://brave-chicken.surge.sh/#/";
  };

};

WebController.$inject = [];

export default WebController;