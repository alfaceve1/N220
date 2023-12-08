let date = new Date();
let year = date.getYear();
console.log(date);
console.log(year);
function calculate() {
    let a = year+1900;
    let age = document.getElementById('age').value;
    let bDate = a - age;
    console.log(bDate);
  
    switch(true) {
    case (1946 <= bDate && bDate<=1964):
      document.getElementById('result').innerHTML = "You were born in "+ bDate + ". You are a member of the Baby Boomer Generation!";
      console.log("boomer");
      break;
    case (1965<= bDate && bDate <=1980):
      document.getElementById('result').innerHTML = "You were born in "+ bDate + ". You are part of Generation X!";
      console.log("x");
      break;
    case (1981<= bDate && bDate <=1996):
      document.getElementById('result').innerHTML = "You were born in "+ bDate + ". You belong in the Y Generation!";
      console.log("y");
      break;
    case (1997<= bDate && bDate <=2012):
      document.getElementById('result').innerHTML = "You were born in "+ bDate + ". Generation Z is your generation!";
      console.log("z");
      break;
    case (2013<= bDate && bDate <=2025):
      document.getElementById('result').innerHTML = "You were born in "+ bDate + ". You are part of Generation Alpha.";
      console.log("alpha");
      break;
    default:
      document.getElementById('result').innerHTML = "You were born in "+ bDate + ". Sorry - your generation is not listed. PS: Are you a time traveler?";
      console.log("Sorry your generation is not listed");
    }
}
