// Generate a random number between 1 and 6 for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Range: 1-6

// Create the image source based on the random number for Player 1
var randomDiceImage = "dice" + randomNumber1 + ".png"; // e.g., dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; // e.g., images/dice1.png - images/dice6.png

// Select the first image element in the document
var image1 = document.querySelectorAll("img")[0];

// Set the source attribute of the first image to the random image source for Player 1
image1.setAttribute("src", randomImageSource);

// Generate a random number between 1 and 6 for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Create the image source based on the random number for Player 2
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Set the source attribute of the second image to the random image source for Player 2
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Determine the winner and update the heading accordingly
if (randomNumber1 > randomNumber2) {
  // Player 1 wins
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  // Player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  // It's a draw
  document.querySelector("h1").innerHTML = "Draw!";
}
