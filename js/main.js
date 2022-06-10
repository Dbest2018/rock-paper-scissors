// Game pages
const home = document.querySelector(".home");
const game = document.querySelector(".game");

// Game choices
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Game display text
const centralMessage = document.querySelector(".message");
const computerMessage = document.querySelector(".message-computer");
const playerScoreText = document.querySelector(".score-player");
const computerScoreText = document.querySelector(".score-computer");

const playButton = document.querySelector(".home__play-btn");
let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomMove = Math.floor(Math.random() * 3);
    return moves[randomMove]
}

const gamePlay = (playerSelection, computerSelection) => {
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "Draw! go again";
    }
    if(playerSelection.toLowerCase() === "paper" ){
        if(computerSelection.toLowerCase() === "rock"){
            playerScore++;
            return "You Win! Paper beats Rock";
        }
        else{
            computerScore++;
            return "You Lose! Scissors beats Paper";
        }
    }
    else if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection.toLowerCase() === "scissors"){
            playerScore++;
            return "You Win! Rock beats Scissors";
        }
        else{
            computerScore++;
            return "You Lose! Paper beats Rock";
        }
    }
    else if(playerSelection.toLowerCase() === "scissors"){
        if(computerSelection.toLowerCase() === "paper"){
            playerScore++;
            return "You Win! Scissors beats paper";
        }
        else{
            computerScore++;
            return "You Lose! Rock beats Scissors";
        }
    }
}

const runGame = (playerMove) => {
    if(playerScore < 5 && computerScore < 5){
        const computerMove = computerPlay()
        const gameResult = gamePlay(playerMove, computerMove);
        computerMessage.textContent = `Computer Plays: ${computerMove}`
        centralMessage.textContent = gameResult;
        playerScoreText.textContent = `Player: ${playerScore}`
        computerScoreText.textContent = `Computer: ${computerScore}`;
    }
    else{
        if(playerScore === 5){
            computerMessage.textContent = "";
            centralMessage.textContent = "CONGRATULATIONS!! YOU WON";
        }
        else{
            computerMessage.textContent = "";
            centralMessage.textContent = "Game Over, YOU LOST";
        }
    }
}

playButton.addEventListener("click",(e) => {
    document.body.style.backgroundImage = "url('./images/rps-5.webp')";
    home.classList.add("disappear");
    game.classList.remove("disappear");
    console.log("play button clicked");
})

rock.addEventListener("click", () => {
    runGame("rock");
});

paper.addEventListener("click", () => {
    runGame("paper");
});

scissors.addEventListener("click", () => {
   runGame("scissors");
});