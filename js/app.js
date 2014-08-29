$(document).foundation({
  orbit: {
    animation: 'slide',
    timer_speed: 5000,
    pause_on_hover: false,
    animation_speed: 500,
    navigation_arrows: true,
    slide_number: false,
    timer: true
  }
});

$(document).ready(function(){
  var height = $(window).height(),
      contentHeight = $(".off-canvas-wrap").height(),
      wrappers = ["html", "body", ".off-canvas-wrap", ".inner-wrap"];

  if (contentHeight < height ) {
    for (var i = 0, n = wrappers.length; i < n; i++) {
      $(wrappers[i]).addClass("full-height");
    }
    $("footer").addClass("sticky-footer");
  }
});