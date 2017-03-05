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

});
