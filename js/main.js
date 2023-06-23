$(document).ready(function () {
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $(".navbar").addClass('navbar_bg');
  });

  $(window).on("scroll", () => {
    $("[touching]").each(function() {
      var className = $('.services__sec').attr("touching")
      var offset = $('.services__sec').offset().top - $(window).scrollTop();
      if (offset <= 0) {
        $('.services__sec').addClass("animate__animated animate__fadeInLeft")
      } else {
        $('.services__sec').removeClass("animate__animated animate__fadeInLeft")
      }
    })
  }).trigger("scroll")

});
