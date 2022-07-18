let playerScore = 0;
let computerScore = 0;

function game(){
    for (let i = 0; i < 5; i++) {
        console.log("-----------This is a new round-----------");
        playRound(getPlayerChoice(), getComputerChoice());
}
console.log ("-----------Results-----------");
if (playerScore > computerScore) {
    console.log("You won the game against the computer!");
} else if (playerScore < computerScore) {
    console.log("A computer beat you lol");
} else {
    console.log("The game ends in a tie!");
}
}

function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            console.log("It's a tie!");
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            console.log("You lost this time.");
            computerScore++;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log("You won this time!");
            playerScore++;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log("You won this time!");
            playerScore++;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            console.log("You lost this time.");
            computerScore++;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            console.log("You lost this time.");
            computerScore++;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log("You won this time!");
            playerScore++;
        } else {
            console.log("Invalid input");
        }
    }

function getPlayerChoice() {
    let getPlayerSelection = prompt("Type your choice: ");
    getPlayerSelection = getPlayerSelection.toLowerCase();
    console.log("Your chose: " + getPlayerSelection)
    return getPlayerSelection;
}
// Pick a random number from 1 to 3. 1 being "Rock", 2 being "Paper", 3 being "Scissors". //

function getComputerChoice() {
    let getChoice = Math.floor(Math.random()*3) + 1;
    let selection;
    if (getChoice === 1) {
        selection = "rock";
    } else if (getChoice === 2) {
        selection = "paper";
    } else {
        selection = "scissors";
}
    console.log("Computer chose: " + selection);
    return selection;
}