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

// Play 5 rounds and reveal the winner

function playGame() {
    // Declare the players' score variables

    let humanScore = 0;
    let computerScore = 0;

    // Play a single round

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
                console.log("You win this round - 1 point for you!");
            } else if (winner == "computer") {
                computerScore++;
                console.log("You lose this round :( Computer gets 1 point");
            }
        }
    }

    // Execute the playRound function 5 times

    for (let round = 1; round <= 5; round++) {
        console.log(`ROUND ${round}`);
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("That's the game - and YOU WON! Congratulations.");
    } else if (computerScore > humanScore) {
        console.log("GAME OVER - You lost. Better luck next time.");
    } else {
        console.log("That's the game, and it looks like it's a tie. Let's play again!");
    }

    console.log(`Your score: ${humanScore} | Computer's score: ${computerScore}`);
}

playGame();