const result = (p1, p2) => {
  if (p1 === p2) {
    return "draw";
  }
  if (p1 === "rock") {
    return p2 === "scissor" ? "player 1 Win" : "player 1 Lose";
  }
  if (p1 === "paper") {
    return p2 === "rock" ? "player 1 Win" : "player 1 Lose";
  }
  if (p1 === "scissor") {
    return p2 === "paper" ? "player 1 Win" : "player 1 Lose";
  }
};

module.exports = result;
