const button = document.querySelector('#clicker');
const displayedScore = document.querySelector('#score');

let score = 0
const incrementor = 1;

const upgradeOne = {
    cost: 10,
    
}

button.onclick = () => {
    score++;
    displayedScore.textContent = score;
}


