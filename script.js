// // // alert("Hello Singh");

// // var x = 10;
// // var x = x +2;
// // // alert(x);

// // var hello = "HELLOOWWWWW ";
// // var world = "WORLDDDDD"

// // hello += world;

// // alert(hello);

// // console.log();
// // var isRaining = true;
// // if(isRaining == true)
// // {
// // 	alert("Ground Is Wet");
// // }
// // if(isRaining == false){
// // 	alert("DRY GROUND");
// // }

// // var price;

// // console.log(price);
// // if(price > 5){
// // 	alert("Greater than 5")
// // }
// // if(price < 5){
// // 	alert("Smaller than 5")
// // }

// // // =  assign value
// // // == comparing values
// // // === compares datatypes


// var isRaining = true;

// if(isRaining === true){
// 	alert("blah blah")
// }
// else if(isRaining === false){
// 	alert("false")
// }
// if


var fruit = "banana";

var userFruit = prompt("Please enter a fruit", "Grape");

// Check the user input
switch (userFruit) {
  case "apple":
    alert("This is apple");
    break;
  case "banana":
    alert("This is a banana");
    break;
  case "pineapple":
    alert("This is a pineapple");
    break;
  case "cherry":
    alert("This is a cherry");
    break;
  default:
    alert("Unknown fruit: " + userFruit);
    break;
}