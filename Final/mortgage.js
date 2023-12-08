
    
function calculate() {
    let  loan = document.getElementById('loan').value;
    let rate2 = document.getElementById('rate').value;
    let rate = ((document.getElementById('rate').value)/100)/12;
    let term = document.getElementById('term').value;
    let months = term*12;
    let calcMor1 = (loan*(rate*Math.pow(1+rate,months)));
    let calcMor2 = ((Math.pow(1+rate,months)-1));
    let calcTotal = calcMor1/calcMor2;
    console.log(calcTotal.toFixed(2));    
    document.getElementById('para').innerHTML =
    "Loan Amount: $" + loan +
    "</br> Loan Term: " + term + " years</br>"+
    "Interest Rate: " + rate2 + "%</br>" +
    "</br>Your  monthly payment will be $" +
    calcTotal.toFixed(2);

}
document.getElementById('calcBtn').addEventListener('click', calculate);
