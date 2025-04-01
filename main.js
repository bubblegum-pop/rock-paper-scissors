const container = document.querySelector(".container");
const body = document.querySelector("body");

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

rockBtn.setAttribute("id", "rock");
paperBtn.setAttribute("id", "paper");
scissorsBtn.setAttribute("id", "scissors");

rockBtn.addEventListener("click", (e) => playRound(e));
paperBtn.addEventListener("click", (e) => playRound(e));
scissorsBtn.addEventListener("click", (e) => playRound(e));

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

const resultsDiv = document.createElement("div");
const scoreboard = document.createElement("div");
const winnerAnnouncement = document.createElement("h2");

const humanScoreDisplay = document.createElement("h3");
const computerScoreDisplay = document.createElement("h3");
scoreboard.appendChild(humanScoreDisplay);
scoreboard.appendChild(computerScoreDisplay);

resultsDiv.appendChild(scoreboard);
resultsDiv.appendChild(winnerAnnouncement);

body.appendChild(resultsDiv);

let humanScore = 0;
let computerScore = 0;

// Each choice is given an equal probability of being randomly selected
function getComputerChoice() {
    let randomNum = Math.random();

    if (randomNum < 1/3) {
        return "rock";
    } else if ((randomNum >= 1/3) && (randomNum < 2/3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection) {
    let humanChoice = playerSelection.target.id;
    let computerChoice = getComputerChoice();
    let winner = "";
    winnerAnnouncement.textContent = "";

    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            winner = "computer";
        } else if (computerChoice == "scissors") {
            winner = "human";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            winner = "human";
        } else if (computerChoice == "scissors") {
            winner = "computer";
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            winner = "computer";
        } else if (computerChoice == "paper") {
            winner = "human";
        }
    }

    if (winner == "human") {
        humanScore++;
    } else if (winner == "computer") {
        computerScore++;
    }

    humanScoreDisplay.textContent = `Your score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;

    function gameIsOver() {
        if (humanScore === 5 || computerScore === 5) {
            return true;
        } else {
            return false;
        }
    }

    if (gameIsOver()) {
        if (humanScore === 5) {
            winnerAnnouncement.textContent = "Congratulations, You Won!!!";
        } else if (computerScore === 5) {
            winnerAnnouncement.textContent = "Game Over - You Lost";
        }

        humanScore = 0;
        computerScore = 0;
    }
}