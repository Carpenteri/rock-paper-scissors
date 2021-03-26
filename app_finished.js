let playerScore = 0;
let compScore = 0;
const playerScore_div = document.getElementById("player-score");
const computerScore_div = document.getElementById("comp-score");
const scores_div = document.querySelector(".scores");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Randomly returns Rock, Paper or Scissors as computers pick.

function getComputerPlay () {
    const choicesArray = ["r", "p", "s"];
    const randomChoice = Math.floor(Math.random() * choicesArray.length);

    return choicesArray[randomChoice]; 
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(playerChoice, computerPlay) {
    const playerChoice_div = document.getElementById(playerChoice);
    playerScore++;
    playerScore_div.innerHTML = playerScore;
    computerScore_div.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(playerChoice)} beats ${convertToWord(computerPlay)}. you win!`;
    playerChoice_div.classList.add('green-glow');
    setTimeout(() => playerChoice_div.classList.remove('green-glow'), 500);
}

function lose(playerChoice, computerPlay) {
    const playerChoice_div = document.getElementById(playerChoice);
    compScore++;
    playerScore_div.innerHTML = playerScore;
    computerScore_div.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(playerChoice)} loses to ${convertToWord(computerPlay)}. you lose!`;
    playerChoice_div.classList.add('red-glow');
    setTimeout(() => playerChoice_div.classList.remove('red-glow'), 500); 
}


function draw(playerChoice, computerPlay) {
    const playerChoice_div = document.getElementById(playerChoice);
    playerScore_div.innerHTML = playerScore;
    computerScore_div.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(playerChoice)} equals ${convertToWord(computerPlay)}. It's a draw.`;
    playerChoice_div.classList.add('gray-glow');
    setTimeout(() => playerChoice_div.classList.remove('gray-glow'), 500);
}

function game(playerChoice) {
    const computerPlay = getComputerPlay();
    switch(playerChoice + computerPlay) {
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, computerPlay);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, computerPlay);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, computerPlay);
            break;
    }
}

function winner () {
    if (playerScore > compScore) {
        
    }
}


function main() {
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));
}


main ();







