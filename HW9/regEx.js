let stringText = document.getElementById('string');
let zipText = document.getElementById('zip');
let ccText = document.getElementById('ccard');
let phoneText = document.getElementById('phone');

//String
function validateString(){
    let vs1 =/ralph/i;
    let vs2 =/^cat/;
    let vs3 =/(dog)$/;
    let stringVal = stringText.value;

    document.getElementById('stringAns').innerHTML = vs3.test(stringVal);
}

stringText.addEventListener('blur', validateString);

//zipcode
function vaildateZip() {
    let zipVal = zipText.value;
    let vz1=/^([0-9]{5})([- ]?)([0-9]{4})?$/;
    document.getElementById('zipAns').innerHTML = vz1.test(zipVal);
}
zipText.addEventListener('blur', vaildateZip);

//credit card
function validateCCard(){
    let ccVal = ccText.value;
    let vc1 = /^(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})$/;
    document.getElementById('ccAns').innerHTML = vc1.test(ccVal);
}
ccText.addEventListener('blur', validateCCard)

//phone number
function validatePhone() {
let pVal = phoneText.value;
let vp1= /^([(]?)([0-9]{3})([)]?)([.]?)([-]?)([ ]?)([0-9]{3})([.]?)([-]?)([0-9]{4})$/;
document.getElementById('phoneAns').innerHTML = vp1.test(pVal);
}
phoneText.addEventListener('blur', validatePhone)