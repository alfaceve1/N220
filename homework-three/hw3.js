function calculate() {
    let p = parseFloat(document.getElementById('principle').value);
    let i = parseFloat(document.getElementById('interestRate').value);
    let t = parseFloat(document.getElementById('time').value);
    let z = i/100
    let y = z*t
    let w = (z*t)*p
    let calculate = (y+1)*p;
    document.getElementById('answer').innerHTML = 
    "With a beginning principal of $"+ p.toFixed(2) + " and a growth rate of " + i + "% for " + t +" years, your total interest will be $" + w.toFixed(2) + " with a grand total of $" + calculate.toFixed(2) + ".";
}