const buttons = document.querySelectorAll('button');
buttons.forEach((button) => { button.addEventListener('click', getPlayerChoice)});

const results = document.querySelector(".results");
const roundResults = document.querySelector(".roundResults");

let playerScore = 0;
let computerScore = 0;

const player = document.querySelector('.playerPoints');
player.textContent = `Player's score: ${playerScore}`;

const computer = document.querySelector(".computerPoints");
computer.textContent = `Computer's score: ${computerScore}`;

function game(){
// Play the game for 5 rounds, each round call the playRound function to get both inputs //
while (playerScore < 5 || computerScore < 5) {
    playRound();
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
    return selection;
}

// Print the results //

if (playerScore === 5) {
    results.textContent = "You won the game against the computer!";
} else if (computerScore === 5) {
    results.textContent = "A computer beat you lol";
} else {
    results.textContent = "The game ends in a tie!";
}
}

// Compare both inputs and update each player's scores //

function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            roundResults.textContent = `It's a tie!`;
            playerPoints.textContent = `Your score: ${playerScore}`;
            computerPoints.textContent = `Computer's score: $computerScore`;
        } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
            roundResults.textContent = `You lost this time.`;
            computerScore++;
            roundResults.textContent = `Your score: ${playerScore}`;
            roundResults.textContent = `Computer's score: ${computerScore}`;
        } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
            roundResults.textContent = `You won this time!`;
            playerScore++;
            roundResults.textContent = `Your score: ${playerScore}`;
            roundResults.textContent = `Computer's score: ${computerScore}`;
        } else {
            roundResults.textContent = `Invalid input`;
        }
    }

// Ask user for their choice and conver the string to lowercase to avoid errors when comparing an uppercase string to a lowercase string//

function getPlayerChoice() {

}
