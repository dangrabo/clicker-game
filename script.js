window.onload = () => {
    updatePage();
}

const clicker = document.querySelector('#clicker');
const displayedScore = document.querySelector('#score');

// Increment upgrade
const incrementUpgradeBtn = document.querySelector('#upg-1-btn');
const incrementUpgradeSpan = document.querySelector('#upg-1-cost');
let incrementCost = 10;


let score = 0
let incrementor = 1;

// Main clicker functionality
clicker.onclick = () => {
    score += incrementor;
    displayedScore.textContent = score;
}

// Increment Upgrade functionality
incrementUpgradeBtn.onclick = () => {
    if (score < incrementCost) {
        alert('You do not have enough points to purchase this upgrade');
        return;
    }
    incrementor++;
    score -= incrementCost;
    incrementCost *= 2;
    alert("Purchase successful :D");
    updatePage();
}

const updatePage = () => {
    displayedScore.textContent = score;
    incrementUpgradeSpan.textContent = incrementCost;
}
