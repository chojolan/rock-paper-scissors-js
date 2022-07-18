let playerScore = 0;
let computerScore = 0;

function game(){
// Play the game for 5 rounds, each round call the playRound function to get both inputs //
    for (let i = 0; i < 5; i++) {
        console.log("-----------This is a new round-----------");
        playRound(getPlayerChoice(), getComputerChoice());
}

// Print the results //

console.log ("-----------Results-----------");
if (playerScore > computerScore) {
    console.log("You won the game against the computer!");
} else if (playerScore < computerScore) {
    console.log("A computer beat you lol");
} else {
    console.log("The game ends in a tie!");
}
}

// Compare both inputs and update each player's scores //

function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            console.log("It's a tie!");
            console.log("Your score: " + playerScore);
            console.log("Computer's score: " + computerScore);
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            console.log("You lost this time.");
            computerScore++;
            console.log("Your score: " + playerScore);
            console.log("Computer's score: " + computerScore);
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log("You won this time!");
            playerScore++;
            console.log("Your score: " + playerScore);
            console.log("Computer's score: " + computerScore);
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log("You won this time!");
            playerScore++;
            console.log("Your score: " + playerScore);
            console.log("Computer's score: " + computerScore);
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            console.log("You lost this time.");
            computerScore++;
            console.log("Your score: " + playerScore);
            console.log("Computer's score: " + computerScore);
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            console.log("You lost this time.");
            computerScore++;
            console.log("Your score: " + playerScore);
            console.log("Computer's score: " + computerScore);
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log("You won this time!");
            playerScore++;
            console.log("Your score: " + playerScore);
            console.log("Computer's score: " + computerScore);
        } else {
            console.log("Invalid input");
        }
    }

// Ask user for their choice and conver the string to lowercase to avoid errors when comparing an uppercase string to a lowercase string//

function getPlayerChoice() {
    let getPlayerSelection = prompt("Type your choice: ");
    getPlayerSelection = getPlayerSelection.toLowerCase();
    console.log("You chose: " + getPlayerSelection)
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