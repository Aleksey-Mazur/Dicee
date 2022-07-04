const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const rollDice = () => {
  document
    .querySelector(".img1")
    .setAttribute("src", `images/dice${randomNumber1}.png`);

  document
    .querySelector(".img2")
    .setAttribute("src", `images/dice${randomNumber2}.png`);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 2 wins! 🚩";
  } else {
    document.querySelector(".container h1").innerHTML = "Draw!";
  }
};

window.onload = function () {
  const reloading = sessionStorage.getItem("reloading");
  if (reloading) {
    sessionStorage.removeItem("reloading");
    rollDice();
  }
};

function reloadP() {
  sessionStorage.setItem("reloading", "true");
  document.location.reload();
}
