function Animal(type, mammal, size) {
	this.type = type;
	this.mammal = mammal;
	this.size = size;

}
Animal.prototype.habitat = "SouthWest United States";
Animal.prototype.hab = function() {
	return this.habitat;
}

function createAnimal() {
	var t = document.getElementById("animalType").value;
	if ( t == ""){
		t = "dog";
	}
	var m = document.getElementById("animalMammal").value;
	if (m == ""){
		m = "non-mammal";
	}
	var s = document.getElementById("animalSize").value;
	if (s == ""){
		s = "large";
	}
	// instansiates animal object
	var a = new Animal(t,m,s);
	return a;

}
//var b = createAnimal();
function showAnimal() {
	var a = createAnimal();
	a.animalInfo = function() {return this.type + " " + this.mammal; }; 
	// use of properties
	document.getElementById("showAnimal").innerHTML = a.type + "  " + a.mammal + "  " + a.size;
	document.getElementById("showAnimal2").innerHTML = a.animalInfo();
	document.getElementById("showAnimal3").innerHTML = a.hab();
	
}