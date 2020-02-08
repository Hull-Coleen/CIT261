var groceries= ["milk", "eggs", "butter", "flour", "sugar", "bacon"];
function createButton() {
	          
	var p = document.createElement("P");
	p.innerHTML = "A button and paragraph were added when the page is downloaded";
	document.body.appendChild(p);
	var btn = document.createElement("BUTTON");   
	btn.innerHTML = "I was created on loading";
	btn.id = "firstB";
	p.id = "firstP";
	document.body.appendChild(btn); 
}
function createList() {
	var shopping = document.createElement("ul");
	
	shopping.id = "list";
    shopping.innerHTML = "Grocery List";
	document.body.appendChild(shopping);
	for (var i = 0; i < groceries.length; i++) {
		var m = document.createElement("li");
	    m.id = "li" + (i + 1);
		m.innerHTML = groceries[i];
		shopping.appendChild(m);
	}
	
}
function removeButton() {
	var b= document.getElementById("firstB");
	var c = document.getElementById("firstP");
	if(document.body.contains(b) && document.body.contains(c) ) {
	   b.remove();
	   var d = document.getElementsByTagName("body");
	   //c.parentNode.removeChild(c);
	   d[0].removeChild(c);
	}
	else {
		alert("they were already removed");
	}
	
}
function addToList() {
	var shopping = document.getElementById("list");
	if(document.body.contains(shopping)) {
	   var li = document.createElement("li");
	   li.innerHTML = "cearal";
	   var item = document.getElementById("li4");
	   shopping.insertBefore(li, item);
	}
	else {
		alert("there is no list");
	}
	
	
}
