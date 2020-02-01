function Animal(type, mammal, size) {
	// properties
	this.type = type;
	this.mammal = mammal;
	this.size = size;
	this.animalSpecs = function() { return this.type + " " + this.mammal; };

}
// added new property using prototype property
Animal.prototype.habitat = "SouthWest United States";
// added new fucntion using prototype property
Animal.prototype.hab = function() {
	return this.habitat;
	
}

// gets input from user and create a new instance of Animal
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
// new instance
function createAnimalWithoutUserInput() {
   var tiger = new Animal("tiger", "mammal", "large");
   tiger.habitat = "Africa";
return tiger;
}
// displays the information of the Animal Contructor
function showAnimal(a) {
	
	a.animalInfo = function() {return this.type + " " + this.mammal; }; 
	// use of properties
	document.getElementById("showAnimal").innerHTML = a.type + "  " + a.mammal + "  " + a.size;
	// use of constructor methods
	document.getElementById("showAnimal2").innerHTML = a.animalInfo();
	document.getElementById("showAnimal3").innerHTML = a.hab();
	document.getElementById("showAnimal4").innerHTML = a.animalSpecs();
	
	
}
function showWhatDoesNotWork() {
	var t = createAnimalWithoutUserInput();
	//t.animalInfo();
	return t;
}


