var fName= "Greg"; //sting
var book= "Greg's Dog's"; 
var lName= "Brooks";
var myage= 27;  //Number/Integer
var student= true; //Boolean
var fullName= fName + " " +lName;

student = false;

let homeTown = "Indianapolis";
homeTown = "Chicago";

const DIMEVAL = 10;
console.log(DIMEVAL);
//DIMEVAL=30;
//console.log(DIMEVAL); WILL CAUS ERROS. CANNOT CHANGE A CONSTANT

console.log("N220");
console.log(book);


document.write(fName);
document.write(student);
document.write(homeTown);
//"Greg Brooks is 7 years old."
document.getElementById("fullName").innerHTML=fullName + " is " + myage + " years old.";

//find data type of variable
console.log("Student " + typeof student);
console.log("My Age " + typeof myage);

//Lunch Problem
var banana = 1.25;
var sandwich = 4.5;
var chips = 1.5;
var drink = 2;
var lunch = banana + sandwich + drink + chips*2;
console.log("Lunch cost: " + lunch)
var cashOnHand = 12;
const TAXRATE = 0.07;
var lunchTotal = lunch + (lunch*TAXRATE);
document.getElementById("lunch").innerHTML += cashOnHand>lunchTotal;
