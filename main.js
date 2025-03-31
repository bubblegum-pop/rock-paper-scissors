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
// Create two global variables: humanScore and computerScore
// Initialize the variables with a value of 0

// Write the logic to play a single round
// Write a function that takes the human and computer choices as arguments, plays a single round, increments the round winner's score, and logs a winner announcement
// Create a new function named playRound
// Define the two parameters: humanChoice and computerChoice
// Make your function's humanChoice parameter case-insensitive
// Have the function console.log a string value representing the round winner
// Increment the humanScore or computerScore based on the winner

// Write the logic to play the entire game
// Your game will play 5 rounds
// Write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores, and declares a winner at the end
// Move your playRound function and score variables so that they're declared inside of the new playGame function
// Re-work your previous functions or create more helper functions as necessary. You may want to change the return values to something more useful
// Feel free to use loops if you know how to use them