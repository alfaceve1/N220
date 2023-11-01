document.getElementsByTagName("h1")[0].innerHTML = "DOM Manipulation";
document.querySelector("div").style.backgroundColor = "lightblue";
document.createElement("li");
let List = document.getElementsByTagName("ul");
let gList = List[List.length - 1];
function add() {
  let newLi = document.createElement("li");
  gList.appendChild(newLi);
}
function deleteItem() {
  let Item = gList.childNodes[7];
  gList.removeChild(Item);
}

add.call();
document.getElementsByTagName("li")[6].innerHTML = "Item 7";
document.getElementsByTagName("li")[0].style.color = "crimson";
document.getElementsByTagName("li")[2].style.backgroundColor = "pink";
document.getElementsByTagName("li")[4].style.backgroundColor = "yellow";
document.getElementsByTagName("li")[6].style.backgroundColor = "lightgrey";
document.getElementsByTagName("li")[6].style.color = "royalblue";
add.call();
document.getElementsByTagName("li")[7].innerHTML = "Alfred";
deleteItem.call();
document.querySelector("button").style.backgroundColor = "rebeccapurple";
document.querySelector("button").style.borderColor = "white";
document.querySelector("button").style.color = "white";
document.querySelector("button").style.fontStyle = "italic";
