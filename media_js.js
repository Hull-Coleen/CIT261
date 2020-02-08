
function changeText() {
    
       document.getElementById("musicAction").innerHTML = "Playing";

}
function pausePlay() {
    document.getElementById("musicAction").innerHTML = "Paused";
}
function myCanvas() {
     var c = document.getElementById("myCanvas");
     var ctx = c.getContext("2d");
     ctx.clearRect(0, 0, 400, 300);
     var img = document.getElementById("flower");
     ctx.drawImage(img,10,10);
}
function text() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 400, 300);
    ctx.font = "55px Garamond";
    ctx.fillText("This is my Text",40, 150);

}
function shading() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 400, 300);
    // Create gradient
    var grd = ctx.createLinearGradient(0,0,300,180);
    grd.addColorStop(0,"red");
    grd.addColorStop(.5,"pink");
    grd.addColorStop(1,"blue");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10,10,380,270);

}
