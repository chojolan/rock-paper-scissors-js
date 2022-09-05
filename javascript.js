const buttons = document.querySelectorAll('button');
buttons.forEach((button) => { button.addEventListener('click', getPlayerChoice)});

const restart = document.getElementById('4');
restart.removeEventListener('click', getPlayerChoice);
restart.addEventListener('click', () => { window.location.reload();})

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

// Pick a random number from 1 to 3. //

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

// get button ID to facilitate player selection for later comparison

function getPlayerChoice(e) {
    playerChoiceId = (e.target.id);
    if(playerChoiceId == 1){playerSelection = 'rock'}
    else if(playerChoiceId == 2){playerSelection = 'paper'}
    else(playerSelection = 'scissors');
    playRound(playerSelection, getComputerChoice());
}

// Compare both inputs and update each player's scores //

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        roundResults.textContent = `It's a tie!`;
        player.textContent = `Your score: ${playerScore}`;
        computer.textContent = `Computer's score: ${computerScore}`;
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        roundResults.textContent = `You lost this round, ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        player.textContent = `Your score: ${playerScore}`;
        computer.textContent = `Computer's score: ${computerScore}`;
    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        roundResults.textContent = `You won this round, ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        player.textContent = `Your score: ${playerScore}`;
        computer.textContent = `Computer's score: ${computerScore}`;
    }
    getResults();
}

    // Print the results and stop reading input from buttons //

function getResults(){
if (playerScore == 5 || computerScore == 5) {
    if(playerScore > computerScore){
        results.textContent = "Game over: You won the game against the computer!";
        buttons.forEach((button) => { button.removeEventListener('click', getPlayerChoice)});
    } else if (computerScore > playerScore){
        results.textContent = "Game over: A computer beat you lol";
        buttons.forEach((button) => { button.removeEventListener('click', getPlayerChoice)});
    } else {
        results.textContent = "Game over: The game ends in a tie.";
        buttons.forEach((button) => { button.removeEventListener('click', getPlayerChoice)});
    }
}
}