"use strict";

/*
console.log(document.querySelector(".message").textContent);
//document.querySelector(".message").textContent = "Number: 🥳";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
console.log((document.querySelector(".guess").value = 10));
*/
let score = 20;

function changeScore() {
  score--;
  document.querySelector(".score").textContent = score;
  if (score === 0)
    document.querySelector(".message").textContent = "😞You lost the game!";
  return score;
}

const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 Not a number ";
  } else if (score > 0) {
    // console.log("score: ", score);
    if (guess === secretNumber) {
      document.querySelector(".message").textContent = "👌Correct number!";
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
