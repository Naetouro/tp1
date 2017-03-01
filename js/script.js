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

  $("#button").click(function(){
    if (typeof(Storage) !== "undefined") {
      
      localStorage.setItem("message", $("#message").val());
      $("#test").html(localStorage.getItem("message"));
    } else {
      alert("marche pas");
    }
  });
});
