// Creates an array that lists out all of the options (Alphabet Letters).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
                        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and guesses left. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftRext = document.getElementById("guesses left-text");
var userChoiceText = document.getElementById("your guesses so far-text");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    // This logic determines the outcome of the game (win/loss), and increments the appropriate number

        if (userGuess === computerGuess) {
            wins++;
        } 
        else {
            losses++;
        } 
        // else {
        //     losses++;
        // }

        // Hide the directions
        directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/guesses left.
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        userChoiceText.textContent = "Your guesses so far: " + userGuess;
        // computerChoiceText.textContent = "The computer chose: " + computerGuess;
        // tiesText.textContent = "ties: " + ties;
        
    }
