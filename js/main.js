$(document).ready(function () {
  $("#test").on("click", function () {
    alert("hola");
  });
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $(".navbar").addClass('navbar_bg');
  });
});
