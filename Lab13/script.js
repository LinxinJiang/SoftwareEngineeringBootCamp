function equation(){
  var list = [document.getElementById('name').value,document.getElementById('byear').value,document.getElementById('year').value];
  var age = list[2] - list[1];

  var text = list[0]+" will be either "+ age +" or "+ (age + 1) + " in "+ list[2] + ".";

  r = confirm("Do you want to continue?");
  if(r){
    document.getElementById("eual").innerHTML = text;
  }else{
    document.getElementById("eual").innerHTML = ("Thank you for using.");
  }
}
