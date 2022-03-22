"use strict";

let score;
let guess;
let secretNumber;
let highScore = 0;

function displayMessage(msg) {
  document.querySelector(".message").textContent = msg;
}

function init() {
  score = 20;
  guess = 0;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
}
init();

function changeScore() {
  score--;
  document.querySelector(".score").textContent = score;
  if (score === 0) displayMessage("😞You lost the game!");
  return score;
}

document.querySelector(".check").addEventListener("click", function () {
  guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("🚫 Not a number ");
  } else if (score > 0) {
    // When player wins
    if (guess === secretNumber) {
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
      displayMessage("👌Correct number!");
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".check").style.visibility = "hidden";
      document.querySelector(".again").style.visibility = "visible";
      document.querySelector(".again").addEventListener("click", function () {
        document.querySelector(".check").style.visibility = "visible";
        document.querySelector(".again").style.visibility = "hidden";
        init();
      });
    } else {
      displayMessage(guess > secretNumber ? "⬆️Too high!" : "⬇️ Too low!");
      changeScore();
    }
  }
});
