/****************************************************
* using javascript to add an class name to an element
* uses a class name to make style changes 
******************************************************/
function tryCSS() {
	document.getElementById("fruitInput").className = "classA";
	document.getElementById("classColor").innerHTML = "my id is classColor";
	var a = document.getElementsByClassName('classA');
	for (var i = 0; i < a.length; i++) {
    var b = a[i];
    b.style.background = 'yellow';
	b.style.color = 'red';
	
  
}
	var b = document.getElementById("AssocArr");
	
    document.querySelector("body").style.backgroundColor = "red";
    var para = document.querySelectorAll("p");
	for (var i = 0; i < para.length; i++) {
    var b = para[i];
    b.style.background = 'pink';
	b.style.color = 'red';
	b.style.fontFamily = 'Harrington'
	
}
    para[0].style.fontSize = '25px';
	
	

  var es = document.getElementsByClassName('buttons');
 
  for (var i = 0; i < es.length; i++) {
    var e = es[i];
    e.style.background = 'blue';
	e.style.color = 'red';
	e.style.borderRadius = '25px';
  
}