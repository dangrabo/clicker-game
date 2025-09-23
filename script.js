const clicker = document.querySelector('#clicker');
const displayedScore = document.querySelector('#score');

// Increment upgrade
const incrementUpgrade = document.querySelector('#upgrade-1');
let incrementCost = 10;


let score = 0
let incrementor = 1;

// Main clicker functionality
clicker.onclick = () => {
    score += incrementor;
    displayedScore.textContent = score;
}

// Increment Upgrade functionality
incrementUpgrade.onclick = () => {
    if (score < incrementCost) {
        alert('You do not have enough points to purchase this upgrade');
        return;
    }
    incrementor++;
    score -= incrementCost;
    incrementCost *= 2;
    alert("Purchase successful :D");
    updateScore();
}

const updateScore = () => {
    displayedScore.textContent = score;
}
