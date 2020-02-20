function storageName() {
    if (typeof (Storage) !== "undefined") {
        console.log(document.getElementById('name').value, document.getElementById('lname').value);

        localStorage.setItem("firstname", document.getElementById('name').value);
        localStorage.setItem("lastname", document.getElementById('lname').value);
        console.log($("#name").val(), document.getElementById('lname').value);
        
        $("#status").html("Your name is " + localStorage.getItem("firstname") 
        + "  " + localStorage.getItem("lastname"));
    }
    else {
        $("#status").html("I am sorry your browser doesn't support local storage.");
    }
}
    
   $(document).ready(function(){
       $("#buttonColor").click(function(){
            var colorArray = [];
            colorArray.push($("#color").val());
            colorArray.push($("#color2").val());
            colorArray.push($("#color3").val());
            colorArray.push($("#color4").val());
            console.log($("#color").val(),$("#color2").val(),$("#color3").val(),$("#color4").val())
            var cArray = JSON.stringify(colorArray);
            console.log(cArray);
            if (typeof (Storage) !== "undefined") {
            localStorage.setItem("colorArray", cArray);
            }
            else {
                $("#status3").html("I am sorry your browser doesn't support local storage.");
             }
        });
        
   });
   $(document).ready(function(){
       $("#showColor").click(function(){
            if (typeof (Storage) !== "undefined") {
                var color = localStorage.getItem("colorArray");
                var c = JSON.parse(color);
                var indexNumber = parseInt($("#arraySelect").val());
                console.log(c);
                $("#status3").html(c[indexNumber]);
            }
            else {
                $("#status3").html("I am sorry your browser doesn't support local storage.");
            }
        });
  
   });
   $(document).ready(function(){
       $("#assocArray").click(function(){
           var assocArray = {
               "name": $("#fname").val(),
               "lastName": $("#lastname").val(),
               "eyeColor": $("#eyeColor").val(),
               "age": $("#age").val(),

            };
           var p = JSON.stringify(assocArray);
           console.log(p);
           if (typeof (Storage) !== "undefined") {
           localStorage.setItem("personInfo", p);
           showArray();
           }
        else {
            $("#status3").html("I am sorry your browser doesn't support local storage.");
         }
        });
        
   });
   function showArray() {
    if (typeof (Storage) !== "undefined") {
        var  person = localStorage.getItem("personInfo");
        var assocPerson = JSON.parse(person);
        console.log(person);
        console.log(assocPerson.name);
        $("#status4").html("First Name: " + assocPerson.name +"<br>" + "Last Name: " 
        + assocPerson.lastName + "<br>" + "Eye Color: " + assocPerson.eyeColor 
        + "<br>" + "Age: " + assocPerson.age);
    }
    else {
        $("#status4").html("I am sorry your browser doesn't support local storage.");
     }
   }
    
