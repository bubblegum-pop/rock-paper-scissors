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

function getHumanChoice() {
    return prompt("Please make your selection.");
}

function playRound(playerSelection) {
    let humanChoice = playerSelection.target.id;
    let computerChoice = getComputerChoice();
    let humanScore = 0;
    let computerScore = 0;
    let winner;

    if (humanChoice == computerChoice) {
        console.log("It's a tie.");
    } else {
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
            console.log("You won the round.");
        } else if (winner == "computer") {
            computerScore++;
            console.log("You lost the round.");
        }
    }
}

function playGame() {

    playRound(getHumanChoice, getComputerChoice)

    // Log the final winner
    if (humanScore > computerScore) {
        console.log("That's the game - and YOU WON! Congratulations.");
    } else if (computerScore > humanScore) {
        console.log("GAME OVER - You lost. Better luck next time.");
    } else {
        console.log("That's the game, and it looks like it's a tie. Let's play again!");
    }

    // Log the players' final scores
    console.log(`Your score: ${humanScore} | Computer's score: ${computerScore}`);
}

// playGame();