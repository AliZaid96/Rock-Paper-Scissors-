//all image tags
let imageTags = document.querySelectorAll('img');

// score for the game here
let userScore = 0;
let compScore = 0;

for (let i = 0; i< imageTags.length; i++){
    imageTags[i].onclick = function(e){

        let user = e.target.id;
        let computer = compRandom();

        checkWinner(user, computer);
    }
}

// computer randomer
function compRandom() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random()*3);
    return choices [randomChoice];
}


// checking the winner function
function checkWinner(userScore, compScore) {
    
}