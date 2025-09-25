window.onload = () => {
    updatePage();
}

// Basic UI components
const clicker = document.querySelector('#clicker');
const displayedScore = document.querySelector('#score');
const rewardsDiv = document.querySelector('#rewards');

// Increment upgrade
const incrementUpgradeBtn = document.querySelector('#upg-1-btn');
const incrementUpgradeCost = document.querySelector('#upg-1-cost');
let incrementCost = 10;

// Time upgrade
const timeUpgradeBtn = document.querySelector('#upg-2-btn');
const timeUpgradeCost = document.querySelector('#upg-2-cost');
let timeCost = 10;

// General player variablese
let score = 0;
let incrementor = 1;
let timeIncrementor = 10;

// Main clicker functionality
clicker.onclick = () => {
    score += incrementor;
    updatePage();
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
    updatePage();
}

// Time upgrade btn fucntionality
timeUpgradeBtn.onclick = () => {
    if (score < timeCost) {
        alert('You do not have enough points to purchase this upgrade');
        return;
    }
    timeIncrementor += 10;
    score -= timeCost;
    timeCost *= 2;
    updatePage();
}

// Timed reward funcitonality (upg-2)
const giveTimedReward = () => {
    score += timeIncrementor;
    updatePage();
}

setInterval(giveTimedReward, 10000);


// Reward tracker object
const rewardsGiven = {
    one: false,
    two: false,
    three: false
}

const giveRewards = () => {
    if (score >= 100 && !rewardsGiven.one) {
        const rewardOne = document.createElement('p');
        rewardOne.innerHTML = '100 🥉'
        rewardsDiv.appendChild(rewardOne);
        rewardsGiven.one = true;
    } else if (score >= 500 && !rewardsGiven.two) {
        const rewardTwo = document.createElement('p');
        rewardTwo.innerHTML = '500 🥈'
        rewardsDiv.appendChild(rewardTwo);
        rewardsGiven.two = true;
    } else if (score >= 1000 && !rewardsGiven.three) {
        const rewardThree = document.createElement('p');
        rewardThree.innerHTML = '1000 🥇';
        rewardsDiv.appendChild(rewardThree);
        rewardsGiven.three = true;
        alert('You have become the MASTER clicker. You have proven yourself worthy of the thunder click ⚡');
        incrementor = 1000;
    }
}

const updatePage = () => {
    giveRewards();
    displayedScore.textContent = score;
    incrementUpgradeCost.textContent = incrementCost;
    timeUpgradeCost.textContent = timeCost;
}
