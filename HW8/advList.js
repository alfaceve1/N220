let cList = document.querySelectorAll('#codeBox ul li');
let listTotal = cList.length;
for(var i=0; i<listTotal; i++){
let imgEle = document.createElement('img');
imgEle.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png"); 
imgEle.setAttribute("class", "listIcon");
cList[i].appendChild(imgEle);
}



  

var myList = document.querySelector('#codeBox ul');
var addBtn = document.getElementsByTagName('input')[0];

myList.addEventListener('click',changeProp, false)
function changeProp(e){
  let target = getTarget(e);
  let tParent = target.parentNode;
  
  if (tParent.tagName == 'LI'){
    myList.removeChild(tParent);
    console.log('hello')
  }
   if(tParent.tagName == 'UL') {
       target.classList.toggle('selected');
       
  } if (tParent.classList == 'selected') {
  }
}
