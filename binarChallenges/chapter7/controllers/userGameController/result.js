const result = (p1, p2) => {
  if (p1 === p2) {
    return "draw";
  }
  if (p1 === "rock") {
    return p2 === "scissor"
      ? "player1 win & player2 lose"
      : "player1 lose & player2 win";
  }
  if (p1 === "paper") {
    return p2 === "rock"
      ? "player1 win & player2 lose"
      : "player1 lose & player2 win";
  }
  if (p1 === "scissor") {
    return p2 === "paper"
      ? "player1 win & player2 lose"
      : "player1 lose & player2 win";
  }
};

module.exports = result;
