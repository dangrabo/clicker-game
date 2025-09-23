const button = document.querySelector('button');
const displayedScore = document.querySelector('#score');
button.onclick = () => {
    const currentScore = Number(displayedScore.textContent);
    displayedScore.textContent = currentScore + 1;
}