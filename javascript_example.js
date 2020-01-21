var fruitArray = ["apple", "orange"];
var arr = { "red": "apple", "yellow": "banana", "orange": "orange" };
function displayArray(param) {
 var text = "";
 var i;
   for (i = 0; i < param.length; i++) {
     text += param[i] + "<br>";
   }
 document.getElementById("fruit").innerHTML = text;

}
function addFruit(param) {
 
   param.push(document.getElementById("fruitInput").value);
   
   if (document.getElementById("fruitInput").value == param[param.length - 1]) {
      document.getElementById("input").innerHTML = "fruit was added";
   }
   else {
      document.getElementById("input").innerHTML = "fruit not added";
   }

}
function checkArray(param) {
var check = document.getElementById("checkInput").value;
   for (i = 0; i < param.length; i++) {
     if (check == param[i]){
	 document.getElementById("check").innerHTML = check + " is number " + ++i;
	 return;
	 }
	 else  {
	   document.getElementById("check").innerHTML = "not found";
	}

   }

}
function usingSwitch(){
 var a = parseInt(document.getElementById("numberInput").value);
 switch (a) {
 case 1:
 document.getElementById("numberSelect").innerHTML = "you picked 1";
 break;
 case 2:
 document.getElementById("numberSelect").innerHTML = "you picked 2";
 break;
 case 3:
 document.getElementById("numberSelect").innerHTML = "you picked 3";
 break;
 case 4:
 document.getElementById("numberSelect").innerHTML = "you picked 4";
 break;
 case 5:
 document.getElementById("numberSelect").innerHTML = "you picked 5";
 break;
 default:
 document.getElementById("numberSelect").innerHTML = "nothing selected";
 }
}

function displayAssocArr() {
var a = document.getElementById("AssocArr").value;
var b = arr[a];
document.getElementById("numberSelect").innerHTML = b;

} 