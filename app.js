let playerSelection;
let compSelection;
let playerScore = 0;
let compScore = 0;

// Randomly returns Rock, Paper or Scissors as computers pick.

function computerPlay () {
    let choicesArray = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choicesArray.length);

    return choicesArray[randomChoice]; 
}

// player selection promt

function playerPromt () {
    let playerChoice = prompt("Choose: 'rock', 'paper' or 'scissors'");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

// One Round of RPS, see who wins and return outcome.

function playRound (playerSelection,compSelection) {
    playerSelection = playerPromt();
    compSelection = computerPlay();
    if (compSelection === "rock" && playerSelection === "scissors" ||
    compSelection === "paper" && playerSelection === "rock" ||
    compSelection === "scissors" && playerSelection === "paper") {
        result = `You Lose! ${playerSelection} loses to ${compSelection}` ;
        compScore++;
    } 
    else if (compSelection === "paper" && playerSelection === "scissors" ||
    compSelection === "scissors" && playerSelection === "rock" ||
    compSelection === "rock" && playerSelection === "paper") {
        result = `You win! ${playerSelection} wins ${compSelection}` ;
        playerScore++;
    } 
    else {
        result = `both chose ${playerSelection} It's a draw!`;
    }
    return result;
}

function game() {
    for (let i = 0; (playerScore + compScore) < 5; i++) {
        console.log(playRound(playerSelection, compSelection));
        console.log(`The current score is: Player - ${playerScore}, Computer - ${compScore}.`);
    } 
    let winner = (playerScore > compScore) ? (`You win, ${playerScore} to ${compScore}.`)
        : (`You lose, ${playerScore} to ${compScore}.`);
        console.log(winner);

}

game ();

