

function calculate() {
    let a = document.getElementById('firstNum').value;
    let b = document.getElementById('secondNum').value;
    let sym = document.getElementById('calcDrop').value;
    let result = 0;
    console.log(a);
    console.log(b);
    console.log(sym);
    
    if(sym=="+") {
        result = Number(a)+Number(b);
        console.log(result);
        document.getElementById('answer').innerHTML= "<ul><li>Equation: " + a + " " + sym + " " +  b + " = ?</li>" + "<li>Answer: " + result + "</li></ul>";  
    } if(sym=="-") {
        result = a-b;
        console.log(result);
        document.getElementById('answer').innerHTML= "<ul><li>Equation: " + a + " " + sym + " " +  b + " = ?</li>" + "<li>Answer: " + result + "</li></ul>";  
    } if(sym=="*") {
        result = a*b;
        console.log(result);
        document.getElementById('answer').innerHTML= "<ul><li>Equation: " + a + " " + sym + " " +  b + " = ?</li>" + "<li>Answer: " + result + "</li></ul>";  
    } if(sym=="/") {
        result = a/b;
        console.log(result);
        document.getElementById('answer').innerHTML= "<ul><li>Equation: " + a + " " + sym + " " +  b + " = ?</li>" + "<li>Answer: " + result + "</li></ul>";  
    } 

    
}
document.getElementById('calcBtn').addEventListener('click', calculate);