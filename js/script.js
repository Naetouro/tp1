$(document).ready(function(){
  var open=false;
    $(".burger").click(function(){
    if(open == false){
      $("#menu").css("display", "block");
      $("#menu").css("margin-top", "2%");
      $("#menu").css("float", "none");
      $("#menu").addClass("menu");
      $("#menu li").addClass("menuli");
      $(this).html("#menu");
      open=true;
  }else{
      $("#menu").css("display", "none");
      open=false;
  }
  });

  $(".envoyer").click(function(){
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("prenom", $(".prenom").val());
      localStorage.setItem("nom", $(".nom").val());
      localStorage.setItem("date", $(".date").val());
      localStorage.setItem("naissance", $(".naissance").val());
      localStorage.setItem("mail", $(".mail").val());
      localStorage.setItem("message", $(".message").val());
    } else {
      alert("marche pas");
    }
  });

  $(".afficher").click(function(){
    $(".resprenom").html(localStorage.getItem("prenom"));
    $(".resnom").html(localStorage.getItem("nom"));
    $(".resdate").html(localStorage.getItem("date"));
    $(".resnaissance").html(localStorage.getItem("naissance"));
    $(".resmail").html(localStorage.getItem("mail"));
    $(".resmessage").html(localStorage.getItem("message"));
  });

  $(".effacer").click(function(){
    localStorage.clear();
    $(".resprenom").html(localStorage.getItem("prenom"));
    $(".resnom").html(localStorage.getItem("nom"));
    $(".resdate").html(localStorage.getItem("date"));
    $(".resnaissance").html(localStorage.getItem("naissance"));
    $(".resmail").html(localStorage.getItem("mail"));
    $(".resmessage").html(localStorage.getItem("message"));
  });


  /*************************Geaolocalisation**************************/

  var centerpos = new google.maps.LatLng(48.579400,7.7519);

// Options relatives à la carte
var optionsGmaps = {
    center:centerpos,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 15
};
// ROADMAP peut être remplacé par SATELLITE, HYBRID ou TERRAIN
// Zoom : 0 = terre entière, 19 = au niveau de la rue

// Initialisation de la carte pour l'élément portant l'id "map"
var map = new google.maps.Map($("#carte"), optionsGmaps);

// .. et la variable qui va stocker les coordonnées
var latlng;

function maPosition(position) {



    // Un nouvel objet LatLng pour Google Maps avec les paramètres de position
    latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    // Ajout d'un marqueur à la position trouvée
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title:"Vous êtes ici"
    });

    // Permet de centrer la carte sur la position latlng
    map.panTo(latlng);

  }

  function erreurPosition(error) {
    var info = "Erreur lors de la géolocalisation : ";
    switch(error.code) {
    case error.TIMEOUT:
    	info += "Timeout !";
    break;
    case error.PERMISSION_DENIED:
	info += "Vous n’avez pas donné la permission";
    break;
    case error.POSITION_UNAVAILABLE:
    	info += "La position n’a pu être déterminée";
    break;
    case error.UNKNOWN_ERROR:
	info += "Erreur inconnue";
    break;
    }

  }

  if(navigator.geolocation) {
    survId = navigator.geolocation.getCurrentPosition(maPosition,erreurPosition);
} else {
    alert("Ce navigateur ne supporte pas la géolocalisation");
}
});
