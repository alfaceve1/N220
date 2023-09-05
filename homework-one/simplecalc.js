var tickets = 3;
var ticketsc = 14;
var TTotal = tickets*ticketsc;
document.getElementById("ticketNum").innerHTML+= tickets;
document.getElementById("ticketCost").innerHTML+=ticketsc;
document.getElementById("ttCost").innerHTML+=TTotal;

var wallet = 235.87;
var jacket = 70;
var shirt = 35;
var pants = 75;
var shoes = 60;
var outfit = wallet - shirt - pants - shoes;

document.getElementById("bank").innerHTML+= "$" + outfit + " left in bank account";
document.getElementById("addJacket").innerHTML= jacket<=outfit;


var pizza = 4;
var student = 2.5;
var pizzaSlice = 8;
var profrector = (pizza*pizzaSlice)/student;
document.getElementById("profPizza").innerHTML+= Math.floor(profrector) + " students fed, ";
document.getElementById("profPizza").innerHTML+= (pizza*pizzaSlice)-(Math.floor(profrector)*student) + " slices left for Professor Rector";


var adultPrice = 12;
var childPrice = 6;
var drinksPrice = 1.50;
var totalReceipt = (2*adultPrice) + (childPrice) + (3*drinksPrice);
document.getElementById("Monty").innerHTML="$" + totalReceipt;

var weekOne = 202.45;
var weekTwo = 134.97;
var weekThree = 256.63;
var weekFour = 178.22;
var average = (weekOne+weekTwo+weekThree+weekFour)/4;
document.getElementById("tips").innerHTML= "$" +average;
