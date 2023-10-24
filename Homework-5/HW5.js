var weapon;
function goWaitTwo(){
    alert("You wait to see what happens next... The snake sensed you and slithers out of the trench to strike its prey!");
    if(weapon.toUpperCase()=="SWORD AND SHIELD"){
        alert("Luckily your "+ weapon +" was a good choice for this battle. You block all its attacks and counter attack to defeat the snake!");
    }else if(weapon.toUpperCase()==="BOW AND ARROW"){
        alert("You use your "+ weapon + " but sadly, the snake took the arrows like a champ and ate you! The crowd roars!");
    }else{
        alert("You use the  "+ weapon +" to keep the snake at bay! It is no match for the shard massive sword. You make quick work of the snake! The crowd seems to get excited and your victory!");
    }
}
function goAttackFour(){
    alert("As the snake slithers through the trench, you take the opportunity and attack!");
    if(weapon.toUpperCase()=="SWORD AND SHIELD"){
        alert("The "+ weapon +" was not that effective at a rush attack. Once the snake recovered it ate you before you could block! The crowd roars for the action.");
    }else if(weapon.toUpperCase()==="BOW AND ARROW"){
        alert("The "+ weapon + " allowed you to inflict great damage from the safe distance. By the time the snake came out of the trench it was too late and it died. Good Job!");
    }else{
        alert("You run and jump inside the trench! With your "+ weapon +" pointing down you land on its head slaying the beast! The crowd loved that performance!");
    }
}
function goRun(){
    alert("Shocked by the sight of the snake you RUN.");
    if(weapon.toUpperCase()=="SWORD AND SHIELD"){
        alert("The snake is quick in the trenches! It strikes but hits your shield. Giving you a chance to slice it open and defeat it! You are lucky to be alive.");
    }else if(weapon.toUpperCase()==="BOW AND ARROW"){
        alert("The snake is quick in the trenches! It cought up to you and ate you! The crowd seemed to enjoy that.");
    }else{
        alert("The "+ weapon +" made you run slow! Making you easy pray... you have died.");
    }
}
function goAttackThree(){
    alert("Before the snake can react you Attack!");
    if(weapon.toUpperCase()=="SWORD AND SHIELD"){
        alert("You use the  "+ weapon +" to slam against it, dazing it to deliver a critical blow! Congratulations you have slain the beast.");
    }else if(weapon.toUpperCase()==="BOW AND ARROW"){
        alert("The "+ weapon + " in these tight quarters was not a good idea. The snake attacked you immediately. You have died. The crowd laughs.");
    }else{
        alert("You tried to swing your "+ weapon +" but hit the walls of the trench. Poor choice in weapon! The snake made easy work of you. ");
    }
}
function goAttackTwo(){
    alert("As the snake charges, you try to get a hit first.");
    if(weapon.toUpperCase()=="SWORD AND SHIELD"){
        alert("The snake had too much momentum and destroyed your "+ weapon +" then it proceeded squeeze you with its body until it all goes to black. You lose...");
    }else if(weapon.toUpperCase()==="BOW AND ARROW"){
        alert("The "+ weapon + " was quick! You fill the snake with arrows and it falls at your feet! The crowd is surprised.");
    }else{
        alert("The "+ weapon +" is big and sharp. With the snakes momentum, it sliced it like butter! You have slain the beast!");
    }
}
function goDodge(){
    alert("You chose to dodge the snakes attack! Giving you a chance to strike after the snake missed.");
    if(weapon.toUpperCase()=="SWORD AND SHIELD"){
        alert("The  " + weapon +" was not the greatest choice to dodge with. You stabbed the snake but it retaliated and killed you.");
    }else if(weapon.toUpperCase()==="BOW AND ARROW"){
        alert("The "+ weapon + " didn't help you much. You managed to put two arrows into the snake but it was close enough to stab you with its fangs. The poison killed you.");
    }else{
        alert("The "+ weapon +" was useful. with One great big swing you severed the snakes head from its body. The Crowd roars in excitement!");
    }
}
function goAttackOne(){
    alert("You jump out surprising the snake with an attack!");
    if(weapon.toUpperCase()=="SWORD AND SHIELD"){
        alert("The  " + weapon +" helped you block its attacks, and with the Sword you finished the job! The crowd cheers for you.");
    }else if(weapon.toUpperCase()==="BOW AND ARROW"){
        alert("The "+ weapon + " gives you the ability to attack from a distance. You fill it with arrows before it gets to you. Killing the giant snake. Great Job!");
    }else{
        alert("The "+ weapon +" made you run slow. Giving the snake time to prepare a defense. It struck you down... Better luck next time.");
    }
}
function goWait(){
    alert("You chose to wait behind the rock. But then lose sight of the Snake! It Appears behind you and strikes you!");
    if(weapon.toUpperCase()=="SWORD AND SHIELD"){
        alert("The  " + weapon +" came to good use! You Blocked the strike with your shield and retaliate with the sword. The crowd goes CRAZY! and the snake is defeated.");
    }else if(weapon.toUpperCase()==="BOW AND ARROW"){
        alert("The "+ weapon + " didn't help you much. The snake struck a vital organ and you have been SLAIN!");
    }else{
        alert("The "+ weapon +" was useful. You pointed it in the snakes direction right before the attack, and it Pierced the snake's head. You are VICTORIOUS and gained the favor of the crowd.");
    }
}
function goJump(){
    alert("You chose to jump into the trench. The crowd ROARS! As you make your way through it, you turn a corner to meet a giant snake HEAD ON!");
    let choiceSix = prompt("Do you ATTACK or RUN?");
    if(choiceSix.toUpperCase()== "ATTACK"){
        goAttackThree();
    }else{
        goRun();
    }

}
function goStay(){
    alert("You chose to stay above ground. You hear a Giant Snake slither through the trench!");
    let choiceSeven = prompt("Do you ATTACK or WAIT?");
    if(choiceSeven.toUpperCase()== "ATTACK"){
        goAttackFour();
    }else{
        goWaitTwo();
    }

}
function goHide(){
    alert("You chose to hide behind the rock. The crowd Boos and complains. You then see a giant snake appear in the open area. It does not See you!")
    let choiceFour = prompt("Do you WAIT or ATTACK?");
    if(choiceFour.toUpperCase()== "WAIT"){
        goWait();
    }else{
        goAttackOne();
    }

}
function goStand(){
    alert("You decided to stand out in the open, and you are spotted by a Giant Snake. It charges at you and the crowd goes WILD!")
    let choiceFive = prompt("Do you DODGE or ATTACK?");
    if(choiceFive.toUpperCase()== "DODGE"){
        goDodge();
    }else{
        goAttackTwo();
    }

}

function goLeft(){
    alert("You chose to go left. As you make your way up the path. You see a giant rock and open area.")
    let choiceTwo = prompt("Do you HIDE or STAY?");
    if(choiceTwo.toUpperCase()== "HIDE"){
        goHide();
    }else{
        goStand();
    }

}
function goRight(){
    alert("You chose to go Right. As you walk down the path you see a trench you can jump into.");
    let choiceThree = prompt("Do you JUMP or STAY?");
    if(choiceThree.toUpperCase()== "JUMP"){
        goJump();
    }else{
        goStay();
    }

}




function startGame(){
    let user = prompt("Welcome to Arena Battle! Please enter your name:");
    alert("Welcome, " + user + ". Are you ready? If so, click ok");
    weapon = prompt("You wake up in a cell. You look around the concrete room and see three weapons by the cell gates... please select a weapon: Sword and Shield, Bow and Arrow, Greatsword");
    let path = prompt("The gates rise and you hear a loud horn then a loud crowd begins to roar. As you walk out you see two paths, one goes left on an incline and one goes right in a decline. Do you go LEFT or RIGHT?");

    if(path.toUpperCase()== "LEFT"){
        goLeft();
    }else{
        goRight();
    }
}