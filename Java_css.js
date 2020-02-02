/****************************************************
* using javascript to add an class name to an element
* uses a class name to make style changes 
******************************************************/
function tryCSS() {
	// add class name to element with id fruitInput
	document.getElementById("fruitInput").className = "classA";
	//Change the text in the element with the id classColor
	document.getElementById("classColor").innerHTML = "my id is classColor";
	// get all the element with the class name "ClassA" and change the background
	// color to yellow and the text to red
	var a = document.getElementsByClassName('classA');
	for (var i = 0; i < a.length; i++) {
       var b = a[i];
       b.style.background = 'yellow';
	   b.style.color = 'red';
    }
    //
	var b = document.getElementById("AssocArr");
	// change the body bacground to red
    document.querySelector("body").style.backgroundColor = "red";
	// get all the the p elements and change the background to pink, the text
	// to red and font to Harrington
    var para = document.querySelectorAll("p");
	for (var i = 0; i < para.length; i++) {
       var b = para[i];
	   if(i % 2 == 0) {
          b.style.background = 'pink';
	      b.style.color = 'red';
	      b.style.fontFamily = 'Harrington'
	    }
	    else {
		   b.style.background = 'green';
	       b.style.color = 'pink';
	       b.style.fontFamily = 'Times New Roman'
	    }
	
    }
    // change the first p element font size
    para[0].style.fontSize = '25px';
	
	
  // get all of the elements with the class name "buttons" and change their background
  // to blue, text color to red and round the buttons edges.
  var es = document.getElementsByClassName('buttons');
 
  for (var i = 0; i < es.length; i++) {
    var e = es[i];
    e.style.background = 'blue';
	e.style.color = 'red';
	e.style.borderRadius = '25px';
   
   }
}