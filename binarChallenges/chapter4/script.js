// Pilihan dari komputer
function comChoice() {
  let com = Math.random();
  if (com < 0.34) {
    return "comRock";
  } else if (com >= 0.34 && com < 0.67) {
    return "comPaper";
  } else {
    return "comScissors";
  }
}
// Akhir dari pilihan komputer

// Aturan / Rules
function result(com, user) {
  if (user == "userRock" && com == "comRock") return "DRAW!";
  if (user == "userPaper" && com == "comPaper") return "DRAW!";
  if (user == "userScissors" && com == "comScissors") return "DRAW!";
  if (user == "userRock")
    return com == "comPaper" ? "COM WIN!" : "PLAYER 1 WIN!";
  if (user == "userPaper")
    return com == "comScissors" ? "COM WIN!" : "PLAYER 1 WIN!";
  if (user == "userScissors")
    return com == "comRock" ? "COM WIN!" : "PLAYER 1 WIN!";
}
// Akhir dari Aturan / Rules

const uRock = document.querySelector("#userRock img");
const uPaper = document.querySelector("#userPaper img");
const uScissors = document.querySelector("#userScissors img");

uRock.addEventListener("click", function () {
  uRock.style.transform = "rotate(90deg)";
});
uPaper.addEventListener("click", function () {
  uPaper.style.transform = "rotate(90deg)";
});
uScissors.addEventListener("click", function () {
  userScissors.style.transform = "rotate(90deg)";
});

const userRock = document.querySelector("#userRock img");
userRock.addEventListener("click", function () {
  const computerChoice = comChoice();
  const userChoice = userRock.className;
  const theResult = result(computerChoice, userChoice);
  const versus = document.querySelector("#versus");
  const comRock = document.querySelector("#comRock img");
  const comPaper = document.querySelector("#comPaper img");
  const comScissors = document.querySelector("#comScissors img");
  const refresh = document.querySelector("#refresh img");
  uPaper.removeAttribute("style");
  uScissors.removeAttribute("style");
  if (computerChoice == "comRock") {
    comRock.style.transform = "rotate(-90deg)";
    refresh.style.transform = "scale(1.5)";
    refresh.style.transition = "all 0.4s";
    comPaper.removeAttribute("style");
    comScissors.removeAttribute("style");
  }
  if (computerChoice == "comPaper") {
    comPaper.style.transform = "rotate(-90deg)";
    refresh.style.transform = "scale(1.5)";
    refresh.style.transition = "all 0.4s";
    comRock.removeAttribute("style");
    comScissors.removeAttribute("style");
  }
  if (computerChoice == "comScissors") {
    comScissors.style.transform = "rotate(-90deg)";
    refresh.style.transform = "scale(1.5)";
    refresh.style.transition = "all 0.4s";
    comPaper.removeAttribute("style");
    comRock.removeAttribute("style");
  }
  versus.innerHTML = theResult;
});

const userPaper = document.querySelector("#userPaper img");
userPaper.addEventListener("click", function () {
  const computerChoice = comChoice();
  const userChoice = userPaper.className;
  const theResult = result(computerChoice, userChoice);
  const versus = document.querySelector("#versus");
  const comRock = document.querySelector("#comRock img");
  const comPaper = document.querySelector("#comPaper img");
  const comScissors = document.querySelector("#comScissors img");
  const refresh = document.querySelector("#refresh img");
  uRock.removeAttribute("style");
  uScissors.removeAttribute("style");
  if (computerChoice == "comRock") {
    comRock.style.transform = "rotate(-90deg)";
    refresh.style.transform = "scale(1.5)";
    refresh.style.transition = "all 0.4s";
    comPaper.removeAttribute("style");
    comScissors.removeAttribute("style");
  }
  if (computerChoice == "comPaper") {
    comPaper.style.transform = "rotate(-90deg)";
    refresh.style.transform = "scale(1.5)";
    refresh.style.transition = "all 0.4s";
    comRock.removeAttribute("style");
    comScissors.removeAttribute("style");
  }
  if (computerChoice == "comScissors") {
    comScissors.style.transform = "rotate(-90deg)";
    refresh.style.transform = "scale(1.5)";
    refresh.style.transition = "all 0.4s";
    comRock.removeAttribute("style");
    comPaper.removeAttribute("style");
  }
  versus.innerHTML = theResult;
});

const userScissors = document.querySelector("#userScissors img");
userScissors.addEventListener("click", function () {
  const computerChoice = comChoice();
  const userChoice = userScissors.className;
  const theResult = result(computerChoice, userChoice);
  const versus = document.querySelector("#versus");
  const comRock = document.querySelector("#comRock img");
  const comPaper = document.querySelector("#comPaper img");
  const comScissors = document.querySelector("#comScissors img");
  const refresh = document.querySelector("#refresh img");
  uPaper.removeAttribute("style");
  uRock.removeAttribute("style");
  if (computerChoice == "comRock") {
    comRock.style.transform = "rotate(-90deg)";
    refresh.style.transform = "scale(1.5)";
    refresh.style.transition = "all 0.4s";
    comPaper.removeAttribute("style");
    comScissors.removeAttribute("style");
  }
  if (computerChoice == "comPaper") {
    comPaper.style.transform = "rotate(-90deg)";
    refresh.style.transform = "scale(1.5)";
    refresh.style.transition = "all 0.4s";
    comRock.removeAttribute("style");
    comScissors.removeAttribute("style");
  }
  if (computerChoice == "comScissors") {
    comScissors.style.transform = "rotate(-90deg)";
    refresh.style.transform = "scale(1.5)";
    refresh.style.transition = "all 0.4s";
    comPaper.removeAttribute("style");
    comRock.removeAttribute("style");
  }
  versus.innerHTML = theResult;
});
