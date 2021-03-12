//
// // JavaScript
//
// var animal ={
//     id:,
//     species:"".
//     name:"",
//     age:,
//     gender:"",
//     weight:,
//     location:"",
//     intakeDate:""
// }
//
//
//
// function create(){
//
//   animal.id = document.getElementById("id").value;
//   animal.species = document.getElementById("species").value;
//   animal.name = document.getElementById("name").value;
//
//   temp = animal;
//   var new = JSON.stringify("#" + 1 + temp)
//   console.log("#" + 1 + temp)
//
// }


function create(){
  // JSON
  var animal =
  {"id":"1",
    "species":"Cat",
    "name":"Layla",
    "age":"3 Years",
    "gender":"Female",
    "weight":"8.0 lbs",
    "location":"In Foster",
    "intakeDate":"2021-02-17"};

  // JavaScript
  var p = document.createElement('p');
  p.innerHTML = 'ID ' + animal.id + ' ' + 'Species ' + animal.species + ' ' + 'Name ' + animal.name +
    ' ' + 'Age ' + animal.age + ' ' + 'Gender ' + animal.gender + ' ' + 'Weight ' + animal.weight + ' ' + 'Location ' + animal.location +
    ' ' + 'Intake date ' + animal.intakeDate;
}
