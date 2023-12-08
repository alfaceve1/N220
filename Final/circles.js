let div = document.createElement("div");
function runCircles(){
    let div = document.createElement("div");
    div.style.width = "75px";
    div.style.height = "75px";
    div.style.background = "red";
    div.style.margin = "5px";
    div.style.borderRadius= "100px";
   
    document.getElementById("circleArea").appendChild(div);
    function change() {
                
        if (div.style.background == "red") {
            div.style.background = "blue";   
        } else {
            div.style.background = "red";
        }
        
    }
    div.addEventListener("click", change);
    
}

function circles() {
    let cNum = document.getElementById('circleAmount').value;
    console.log(cNum);
    if (cNum<1 || cNum>100) {
        alert("Your number must be between 1 and 100!");
    } else {
        for(let i=0;i<cNum;i++) {
            runCircles(i);
        }
    
    }
    
}
  

