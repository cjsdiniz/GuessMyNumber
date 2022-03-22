"use strict";

/*
console.log(document.querySelector(".message").textContent);
//document.querySelector(".message").textContent = "Number: 🥳";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
console.log((document.querySelector(".guess").value = 10));
*/
let score;
let guess;
let secretNumber;
let highScore = 0;

function init() {
  score = 20;
  guess = 0;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
}
init();

function changeScore() {
  score--;
  document.querySelector(".score").textContent = score;
  if (score === 0)
    document.querySelector(".message").textContent = "😞You lost the game!";
  return score;
}

document.querySelector(".check").addEventListener("click", function () {
  guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 Not a number ";
  } else if (score > 0) {
    // When player wins
    if (guess === secretNumber) {
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
      document.querySelector(".message").textContent = "👌Correct number!";
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
      if (guess > secretNumber) {
        document.querySelector(".message").textContent = "⬆️Too high!";
      } else {
        document.querySelector(".message").textContent = "⬇️ Too low!";
      }
      changeScore();
    }
  }
});
