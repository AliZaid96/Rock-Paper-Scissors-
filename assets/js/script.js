//all image tags
let imageTags = document.querySelectorAll('img');

// score for the game here
let userScore = 0;
let compScore = 0;

for (let i = 0; i< imageTags.length; i++){
    imageTags[i].onclick = function(e){
        console.log(e.target.id);
    }
}