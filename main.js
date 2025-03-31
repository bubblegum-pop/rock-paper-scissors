// Return one of the valid choices at random as the computer's choice

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

// Prompt for and return the human player's choice

function getHumanChoice() {
    return prompt("What'll it be? Rock, Paper, or Scissors?");
}

// Declare the players' score variables

let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let winner;

    console.log(`You chose: ${humanChoice}`);
    console.log(`The computer chose: ${computerChoice}`);

    if (humanChoice == computerChoice) {
        console.log("It's a tie - no points for anyone");
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
            console.log("You win this round!");
        } else if (winner == "computer") {
            computerScore++;
            console.log("You lose this round :(");
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Write the logic to play the entire game
// Your game will play 5 rounds
// Write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores, and declares a winner at the end
// Move your playRound function and score variables so that they're declared inside of the new playGame function
// Re-work your previous functions or create more helper functions as necessary. You may want to change the return values to something more useful
// Feel free to use loops if you know how to use them