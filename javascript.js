const computerSelection = getComputerChoice();

function playerSelection() {
    const playerSelection = prompt("Type your choice: ");
}

function getComputerChoice() {
    getChoice = Math.floor(Math.random()*3) + 1;
    if (getChoice === 1) {
        getChoice = "Rock";
    } else if (getChoice === 2) {
        getChoice = "Paper";
    } else {
        getChoice = "Scissors";
}

}