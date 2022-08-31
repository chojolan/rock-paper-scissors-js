const buttons = document.querySelectorAll('button');
buttons.forEach((button) => { button.addEventListener('click', getPlayerChoice)});

const results = document.querySelector(".results");
const roundResults = document.querySelector(".roundResults");

let playerScore = 0;
let computerScore = 0;
let playerChoiceId = 0;
let computerChoiceId = 0;

const player = document.querySelector('.playerPoints');
player.textContent = `Player's score: ${playerScore}`;

const computer = document.querySelector(".computerPoints");
computer.textContent = `Computer's score: ${computerScore}`;

// Pick a random number from 1 to 3. 1 being "Rock", 2 being "Paper", 3 being "Scissors". //

function getComputerChoice() {
    let computerChoiceId = Math.floor(Math.random()*3) + 1;
    if (computerChoiceId === 1) {
        computerSelection = "rock";
    } else if (computerChoiceId === 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
}
    return computerSelection;
}

// Ask user for their choice and conver the string to lowercase to avoid errors when comparing an uppercase string to a lowercase string//

function getPlayerChoice(e) {
    playerChoiceId = (e.target.id);
    if(playerChoiceId == 1){playerSelection = 'rock'}
    else if(playerChoiceId == 2){playerSelection = 'paper'}
    else(playerSelection = 'scissors');
    console.log(playerChoiceId);
    console.log(playerSelection)
}


// Compare both inputs and update each player's scores //

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResults.textContent = `It's a tie!`;
        playerPoints.textContent = `Your score: ${playerScore}`;
        computerPoints.textContent = `Computer's score: ${computerScore}`;
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
    getResults();
}

    // Print the results //

function getResults(){
if (playerScore === 5) {
    results.textContent = "You won the game against the computer!";
} else if (computerScore === 5) {
    results.textContent = "A computer beat you lol";
} else {
    results.textContent = "The game ends in a tie!";
}
}