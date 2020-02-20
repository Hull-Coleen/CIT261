
function cssStyle() {
    document.getElementById("para1").style.background = "pink";
    document.getElementById("para1").style.fontSize = "50px";
    document.getElementById("para1").style.height = "200px";
    document.getElementById("para1").style.color = "blue";
  }
  function cssStyleBack(param) {
     param.style.background ="blue";
     param.style.fontSize = "25px";
     param.style.height = "50px";
     param.style.color = "pink";
  }
  function test(param) {
    param.style.background = "pink";
    param.style.fontSize = "50px";
    param.style.height = "200px";
    param.style.color = "blue";
  }
  function test2(p) {
      console.log("button animation function");
      p.style.animation = "b 6s linear 0s infinite";
  }
  function loading() {
      var text = "<p>I was loaded using javascript</p>"
      $("body").append(text);
  }

$(document).ready(function(){
    $("#test").mouseenter(function() {
          $("#test").css("animation", "b 6s linear 0s infinite");
    });
});
$(document).ready(function(){
    $("#test").click(function() {
          $("#test").css("animationPlayState", "paused");
    });
});
$(document).ready(function(){
    $("#animation").mousedown(function() {
          $("#animation").css("animation", "slidein 5s");
    });
});
$(document).ready(function(){
    $("#img1").mouseup(function() {
          $("#img1").css("transform", "rotateY(180deg) scale(2) skew(20deg) translate(-60px, -90px)");
    });
});
$(document).ready(function(){
    $(".img2").hover(function() {
          $(".img2").css("transform", "rotateY(180deg) scale(.5) skew(20deg) translate(-60px, -90px)");
    });
});

$(document).ready(function(){
    $("button").click(function() {
       console.log('click button');
          $("button").css("animation", "b 6s linear 0s 5");
    });
});
$(document).ready(function(){
    $("#animation").on("touchstart", function() {
       console.log("h1 touch");
          $("button").css("animation", "b 6s linear 0s 5");
    });
});
$(document).ready(function(){
    $("#head1").on("touchend", function() {
       console.log("in fucntion");
          $("#head1").css("animation", "b 6s linear 0s 2");
    });
});
$(document).ready(function(){
    $("p").on("touchmove", function() {
       console.log("swipe fucntion");
          $("p").css("animation", "b 6s linear 0s 2");
    });
});