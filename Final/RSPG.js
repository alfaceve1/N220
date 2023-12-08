let games = 0;
let winner = "";



function rpsGame() {
    const rps = ['rock', 'scissors', 'paper'];
    let p1 = rps[Math.floor(Math.random() * rps.length)];
    let p2 = rps[Math.floor(Math.random() * rps.length)];
    console.log(p1)
    console.log(p2)
    games += 1;
    

    if (p1 == 'rock'&& p2== 'scissors' ) {
        document.getElementById('winner').innerHTML = "Player 1 wins! Play again.";
        winner = "Player 1";
    } if (p1 == 'scissors'&& p2== 'paper' ) {
        document.getElementById('winner').innerHTML = "Player 1 wins! Play again."; 
        winner = "Player 1";
    } if (p1 == 'paper' && p2== 'rock' ) {
        document.getElementById('winner').innerHTML = "Player 1 wins! Play again.";
        winner = "Player 1";
    } if (p1 == p2 ) {
        document.getElementById('winner').innerHTML = "Its a tie! Play again.";
        winner = "Tie!";
    } if (p1 == 'scissors'&& p2==='rock'){
        document.getElementById('winner').innerHTML = "Player 2 wins! Play again.";
        winner = "Player 2";
    } if (p1 == 'paper'&& p2=='scissors'){
        document.getElementById('winner').innerHTML = "Player 2 wins! Play again.";
        winner = "Player 2";
    }if (p1 == 'rock'&& p2=='paper'){
        document.getElementById('winner').innerHTML = "Player 2 wins! Play again.";
        winner = "Player 2";
    };
    let img1 = document.getElementById('p1');
    let img2 = document.getElementById('p2');
    if (p1=='rock'){
        img1.setAttribute("src", "rock.png");
    }if (p2=='rock') {
        img2.setAttribute("src", "rock.png");
    } if (p1=='paper'){
        img1.setAttribute("src", "paper.png");
    }if (p2=='paper') {
        img2.setAttribute("src", "paper.png");
    } if (p1=='scissors'){
        img1.setAttribute("src", "scissors.png");
    }if (p2=='scissors') {
        img2.setAttribute("src", "scissors.png");
    } 
    let scoreBoard = document.getElementsByTagName('table')[0];
    let lastGame = scoreBoard.insertRow(-1);
    let gameNum = lastGame.insertCell(0)
    let winnerBoard = lastGame.insertCell(1);
    gameNum.innerHTML = games;
    winnerBoard.innerHTML = winner;


     
    console.log(games);
}

console.log(games);