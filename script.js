window.onload = () => {
    updatePage();
}

const clicker = document.querySelector('#clicker');
const displayedScore = document.querySelector('#score');

// Increment upgrade
const incrementUpgradeBtn = document.querySelector('#upg-1-btn');
const incrementUpgradeCost = document.querySelector('#upg-1-cost');
let incrementCost = 10;

// Time upgrade
const timeUpgradeBtn = document.querySelector('#upg-2-btn');
const timeUpgradeCost = document.querySelector('#upg-2-cost');
const timeUpgradeReward = document.querySelector('#time-plus');
let timeCost = 10;
let timeIncrementor = 10;

// General player variablese
let score = 0
let incrementor = 1;

// Main clicker functionality
clicker.onclick = () => {
    score += incrementor;
    displayedScore.textContent = score;
}

// Increment Upgrade functionality (upg-1)
incrementUpgradeBtn.onclick = () => {
    if (score < incrementCost) {
        alert('You do not have enough points to purchase this upgrade');
        return;
    }
    incrementor++;
    score -= incrementCost;
    incrementCost *= 2;
    clicker.textContent =  `+${incrementor}`;
    alert("Purchase successful :D");
    updatePage();
}

// Time upgrade funcitonality (upg-2)
const giveTimedReward = () => {
    score += timeIncrementor;
    updatePage();
}

setInterval(giveTimedReward, 10000);

// Time upgrade btn fucntionality
timeUpgradeBtn.onclick = () => {
    if (score < timeCost) {
        alert('You do not have enough points to purchase this upgrade');
        return;
    }
}

const updatePage = () => {
    displayedScore.textContent = score;
    incrementUpgradeCost.textContent = incrementCost;
    timeUpgradeCost.textContent = timeCost;
    timeUpgradeReward.innerHTML = timeIncrementor
}
