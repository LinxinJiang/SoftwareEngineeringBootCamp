// donate to We Pets

function donteToWePets(){
  var name = document.getElementById('name').value;
  var amount = document.getElementById('donate').value;
  var text = name + " , thank you for your kindness!";

  r = confirm("You want to donate " + amount + " dollars.");
  if(r){
    document.getElementById("DTW").innerHTML = text;
  }else{
    document.getElementById("DTW").innerHTML = ("Thank you for considering helping us.");
  }

}
