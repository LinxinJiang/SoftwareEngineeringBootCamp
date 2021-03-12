// donate to We Pets
function donteToWePets(){
  var name = document.getElementById('name').value;
  var donate = document.getElementById('donate').value;
  var pNumber = document.getElementById('pNumber').value;
  var text = name + " , thank you for your kindness!";

  r = confirm("Dear "+ name +" , are you want to donate " + donate + " dollars?");
  if(r){
    document.getElementById("DTW").innerHTML = text;
  }else{
    document.getElementById("DTW").innerHTML = ("Thank you for considering helping us.");
  }
}
