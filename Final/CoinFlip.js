let headsNum = 0;
let tailsNum = 0;
let flips = 0;
let winner = "";
function coinFlip() {
    const coin = ['heads', 'tails'];
    let flip = coin[Math.floor(Math.random()*coin.length)];
    flips += 1;
    if (flip == 'heads') {
        document.getElementsByTagName('img')[0].setAttribute("src", "heads.png");
        console.log("heads");
        headsNum++;
        winner = "Heads";

    } else {
        document.getElementsByTagName('img')[0].setAttribute("src", "tails.png");
        console.log("tails");
        tailsNum++;
        winner = "Tails";
    }
    document.getElementById('ratio').innerHTML = "Ratio of Heads to Tails is " + headsNum + ":" + tailsNum;
    console.log(headsNum);
    let scoreBoard = document.getElementsByTagName('table')[0];
    let lastGame = scoreBoard.insertRow(-1);
    let gameNum = lastGame.insertCell(0)
    let winnerBoard = lastGame.insertCell(1);
    gameNum.innerHTML = flips;
    winnerBoard.innerHTML = winner;

}
