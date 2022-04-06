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
function checkWinner(userChoice, computerChoice) {
    const result = document.getElementById('result');
    
    if (userChoice === computerChoice) {
        result.innerHTML = 'Both selected ' + userChoice + '. It is a tie!'
    } else if (userChoice === 'rock') {
        if (computerChoice === 'scissors'){
            result.innerHTML = 'Rock beats Scissors, you WIN!';
            userScore++;
        } else {
            result.innerHTML = 'Unlucky, paper beats rock. You lose!';
            compScore++;
        }
    } else if (userChoice === 'paper'){
        if (computerChoice === 'rock'){
            result.innerHTML = 'Paper beats rock, you WIN!';
            userScore++;
        } else {
            result.innerHTML = 'Scissors cuts paper, you lose!';
            compScore++;
        }
    } else if (userChoice === 'scissors'){
        if (computerChoice === 'paper'){
            result.innerHTML = 'Scissors cuts the paper, You WIN!';
            userScore++;
        } else {
            result.innerHTML = 'Rock beats scissors. You lose!';
            compScore++;
        }
    }

    document.getElementById('result-user').innerHTML = userScore.toString();
    document.getElementById('result-comp').innerHTML = compScore.toString();
}