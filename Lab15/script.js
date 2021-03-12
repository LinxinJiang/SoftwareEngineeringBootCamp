var row = 1;

function superNinja(){
  var user = prompt("Hello there... Who are you?");
  var c = confirm("Do you want to play Ninjas?");

  if(c){
    var ninja={
      beltColor:prompt("What color of belt it's your belt: "),
      name:prompt("What is the name of your ninja: "),
      power:(prompt("Tell me 3 super powers:'separete each power with a comma'")).split(",")
    };
    console.log(ninja.power[0] + ninja.power[1] + ninja.power[2]);
    alert("Well " + user + ninja.name +" with " + ninja.beltColor + " belt, has the power of: " + ninja.power[0] + " the power of: "+ ninja.power[1] + " the power of: " + ninja.power[2] + " let's play ");
  }


  var display = document.getElementById("display");

  var newrow = display.insertRow(row);

  var cell1 = newrow.insertCell(0);
  var cell2 = newrow.insertCell(1);
  var cell3 = newrow.insertCell(2);
  var cell4 = newrow.insertCell(3);

  cell1.innerHTML = user;
  cell2.innerHTML = ninja.beltColor;
  cell3.innerHTML = ninja.name;
  cell4.innerHTML = ninja.power;


}

function showImage(){
  document.getElementById('loadingImage').style.visibility="visible";
}

function showImage1(){
  document.getElementById('loading').style.visibility="visible";
}








superNinja();
