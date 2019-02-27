// Creates an array that lists out all of the options (Alphabet Letters).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and guesses left. 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userChoice = "";


// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var userChoiceText = document.getElementById("yourguessessofar-text");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    userChoice = userChoice + " " + userGuess

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    // This logic determines the outcome of the game (win/loss), and increments the appropriate number
    if (options.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            alert("You win!");
            guessesLeft = 9;
            userChoice = "";
        }
        if (userGuess !== computerGuess) {
            guessesLeft--;
        }
        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            alert("Sorry, try again");
            userChoice = "";

        }
    }
    // //function to show letter guessed in the browser.
    // function showuserChoice() {
    //     var tempStr = userGuess.join(", ");
    //     document.getElementById("yourguessessofar").innerHTML = tempStr;
    // }

    // Display the user and computer guesses, and wins/losses/guesses left.
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    userChoiceText.textContent = "Your Guesses so far: " + userChoice;



}


