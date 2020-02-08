var groceries= ["milk", "eggs", "butter", "flour", "sugar", "bacon"];
function createButton() {
	          
	var p = document.createElement("P");
	p.innerHTML = "A button and paragraph were added when the page is downloaded";
	document.body.appendChild(p);
	var btn = document.createElement("BUTTON");   
    btn.innerHTML = "I was created on loading";
	document.body.appendChild(btn); 
	document.getElementByTag;
	var para = document.getElementsByTagName("P"[0]).id = "firstP";
	var bu = document.getElementsByTagName("BUTTON"[0]).id = "firstB";
	
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
	//
	//shopping.innerHTML = "List";
	//m.innerHTML = "milk";
	//shopping.appendChild(m);
}

