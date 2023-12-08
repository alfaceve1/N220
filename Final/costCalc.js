function calculate() {
    let price = document.getElementById('priceNum').value;
    let disCode = document.getElementById('disCode').value;
    console.log(price, disCode)
    if(disCode == "SAVE20"){
        let save = price*.20;
        let newP = ((price-save)*.08)+(price-save);
        console.log(newP);
        document.getElementById('results').innerHTML = "Your new total is $" + newP.toFixed(2) + "! </br> You saved $" + save.toFixed(2) + "!";
    }else if(disCode == "JOLLYDAYS"){
        let save = price*.15;
        let newP = ((price-save)*.08)+(price-save);
        console.log(newP); 
        document.getElementById('results').innerHTML = "Your new total is $" + newP.toFixed(2) + "! </br> You saved $" + save.toFixed(2) + "!"; 
    } else if(disCode == "HOLIDAY10"){
        let save = price*.10;
        let newP = ((price-save)*.08)+(price-save);
        console.log(newP);
        document.getElementById('results').innerHTML = "Your new total is $" + newP.toFixed(2) + "! </br> You saved $" + save.toFixed(2) + "!";
    } else {
        alert("Please enter a valid discount code.");
    }

    
}


document.getElementById('calcBtn').addEventListener('click', calculate);