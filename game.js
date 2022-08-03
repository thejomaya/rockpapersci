let round=1;
let compscore = 0;
let userscore = 0;
document.getElementById('round1').innerText=round;
document.getElementById('round2').innerText=round;
document.getElementById('round3').innerText=round;
document.getElementById('round4').innerText=round;
document.getElementById('round5').innerText=round;

function runonce(){
    let row2 = document.getElementById('row2');
    row2.style.display="flex";

    let roundend = document.getElementById('roundend');
    roundend.style.display="flex";

    document.getElementById('runonce').innerText = "Shoot for Round " + (round+1);
    document.getElementById('endgame').innerText = "End Game"

    let userchoice = document.querySelector('input[type=radio][name=userradio]:checked').value;
    let computchoice = compchoice();
 
    
    document.getElementById('userchoice').innerText=userchoice;
    document.getElementById('computerchoice').innerText=computchoice;
        
    document.getElementById('result').innerText=getresult(userchoice,computchoice);
    document.getElementById('userscore').innerText=userscore;
    document.getElementById('compscore').innerText=compscore;

    round+=1;

    document.getElementById('round1').innerText=round;
    document.getElementById('round2').innerText=round-1;
    document.getElementById('round3').innerText=round-1;
    document.getElementById('round4').innerText=round-1;
    document.getElementById('round5').innerText=round-1;

}









function startover(){
    round=1;
    compscore = 0;
    userscore = 0;
    userchoice="";
    computchoice="";
    let final = document.getElementById('final');
    final.style.display="none";

    let row2 = document.getElementById('row2');
    row2.style.display="none";

    let roundend = document.getElementById('roundend');
    roundend.style.display="none";

    document.getElementById('round1').innerText=round;
    document.getElementById('round2').innerText=round;
    document.getElementById('round3').innerText=round;
    document.getElementById('round4').innerText=round;
    document.getElementById('round5').innerText=round;
    document.getElementById('runonce').innerText = "Shoot for Round " + (round);
    document.getElementById('userscore').innerText=userscore;
    document.getElementById('compscore').innerText=compscore;
    document.getElementById('userchoice').innerText=userchoice;
    document.getElementById('computerchoice').innerText=computchoice;

}



function compchoice(){
   let i = getRandomInt(1,3);
   if(i==1) return "Rock";
   else if (i==2) return "Paper";
   else return "Scissors";
} ;


function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function getresult(u,c){
    if(u===c) {
        compscore += 0.5;
        userscore +=  0.5;
        return "You and Computer are tied";
    }
    else if(u=="Rock")
        {
        if(c=="Scissors") {
            userscore +=  1;
            return "You Won!!! Rock beats Scissors.";
        }
        else if (c=="Paper") {
            compscore += 1;
            return "Computer Won. Paper beats Rock.";
        }
        }
        
        else if(u=="Paper")
        {
        if(c=="Scissors") {
            compscore += 1;
            return "Computer Won. Scissors beats Paper.";
        }
        else if (c=="Rock") {
            userscore +=  1;
            return "You Won!!! Paper beats Rock.";
        }
        }
        
        else if(u=="Scissors")
        {
        if(c=="Rock") {
            compscore += 1;
            return "Computer Won. Rock beats Scissors.";
        }
        else if (c=="Paper") {
            userscore +=  1;
            return "You Won!!! Scissors beats Paper.";
        }
        }
    }

function endgame(){
if (userscore==compscore) {
    document.getElementById('overallresult').innerText="Game tied with score of " + userscore;
    document.getElementById('resultsum').innerText="Well played. Everyone is a winner.";
}
else if (userscore>compscore){
    document.getElementById('overallresult').innerText="You won with score of "+ userscore;
    document.getElementById('resultsum').innerText="Congratulations. You are the winner.";
}
else {
    document.getElementById('overallresult').innerText="Computer won with score of " + compscore;
    document.getElementById('resultsum').innerText="You lost. Try again.";
}
let final = document.getElementById('final');
final.style.display="flex";
final.scrollIntoView();
};