let WebController = function() {
  
  var auditioncity = document.getElementById('auditioncity');
  var contactapp = document.getElementById('contactapp');

  auditioncity.onclick = function() {
    window.location = "http://auditioncity.surge.sh/#/login";
  };
  contactapp.onclick = function() {
    window.location = "http://violet-train.surge.sh/";
  };

};

WebController.$inject = [];

export default WebController;