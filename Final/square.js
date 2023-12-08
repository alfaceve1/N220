function calculate() {
    let width = document.getElementById('width').value;
    let height = document.getElementById('Height').value;
    let area = width*height;
    document.getElementById('result').innerHTML = "Result: " + area + " square feet.";
    document.getElementsByTagName('div')[0].style.width = width*10 + "px";
    document.getElementsByTagName('div')[0].style.height = height*10 + "px";


    console.log(width);
    console.log(height);
    console.log(area);
}
document.getElementById('calcBtn').addEventListener('click', calculate);