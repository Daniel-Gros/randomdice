// ****** DÉFINITION DES VARIABLES & CONSTANTES ******

const newGameButton = document.getElementById("newgame");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
let currentPlayer;
let dice = Math.floor(Math.random() * 6 + 1);
letDicePicture = document.getElementById("dice-picture");
let currentScore = 0;
let totalScore = 0;

// ****** Variables des face du dé ******

const face1 = document.getElementById("face1");
const face2 = document.getElementById("face2");
const face3 = document.getElementById("face3");
const face4 = document.getElementById("face4");
const face5 = document.getElementById("face");
const face6 = document.getElementById("face6");

const diceFace = () => {
  if (dice === 1) {
    face1.classList.remove("hidden");
    face1.classList.add("active");
  } else if (dice === 2) {
    face2.classList.remove("hidden");
    face2.classList.add("active");
  } else if (dice === 3) {
    face3.classList.remove("hidden");
    face3.classList.add("active");
  } else if (dice === 4) {
    face4.classList.remove("hidden");
    face4.classList.add("active");
  } else if (dice === 5) {
    face5.classList.remove("hidden");
    face5.classList.add("active");
  } else if (dice === 6) {
    face6.classList.remove("hidden");
    face6.classList.add("active");
  }
};

// ****** DÉFINITION DES FONCTIONS DE TOUR DE JEU ******

const player1turn = function () {
  if (currentPlayer === player1) {
    player2.classList.remove("hidden");
    player2.classList.add("active", "half-right");
    player1.classList.remove("active");
    player1.classList.add("hidden");
  }
};
const player2turn = function () {
  if (currentPlayer === player2) {
    player1.classList.remove("hidden");
    player1.classList.add("active", "half-left");
    player2.classList.remove("active");
    player2.classList.add("hidden");
  }
};

// ****** DÉFINITION DES FONCTIONS DE DÉPART DU JEU ******
function startNewGame() {
  chooseNames();
}

function chooseNames() {
  let namePlayer1 = prompt("Entrez le nom du joueur 1");
  if (namePlayer1 === null || namePlayer1 === "") {
    alert("Vous devez choisir un prénom pour le joueur 1");
    chooseNames();
    return;
  }
  let newName1 = document.getElementById("player-1");
  newName1.innerHTML = namePlayer1;

  let namePlayer2 = prompt("Entrez le nom du joueur 2");
  if (namePlayer2 === null || namePlayer2 === "") {
    alert("Vous devez choisir un prénom pour le joueur 2");
    chooseNames();
    return;
  }
  let newName2 = document.getElementById("player-2");
  newName2.innerHTML = namePlayer2;

  firstToPlay();
}

newGameButton.addEventListener("click", startNewGame);

// ****** SELECTION DU JOUEUR QUI DÉBUTE LA PARTIE ******

function firstToPlay() {
  chooseFirstPlayer();
}

function chooseFirstPlayer() {
  let firstPlayer = Math.floor(Math.random() * 2 + 1);
  if (firstPlayer === 1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;

    if (currentPlayer === player1) {
      player1turn();
    } else {
      player2turn();
    }
  }
  alert(`C'est ${currentPlayer.innerHTML} qui commence !`);
}

switchTurn();

function switchTurn() {
  if (currentPlayer === player1) {
    player1turn();
  } else {
    player2turn();
  }
}

// ****** FONCTIONS DE JEU ******

function rollDice() {
  dice = Math.floor(Math.random() * 6 + 1);
  diceFace();
  return dice;
}
rollDiceButton();

function rollDiceButton() {
  document.getElementsByClassName("roll_dice").length;
  return dice;
}
if (dice !== 1) {
  alert(` ${currentPlayer.innerHTML} a obtenu un ${dice} !`);
} else {
  alert("C'est la fin du tour, vous avez obtenu 1");
  switchTurn();
}
function holdButton() {
  document.getElementsByClassName("hold-dice").addEventListener("click", hold);
}

// function currentPoints() {
//   let points = 0;
//   points += dice;
//   currentPoints.innerHTML = points;
//   if (dice === 1) {
//     points = 0;
//     switchTurn();
//   }
// }

// function winTheGame() {
//   if (currentPlayer === 100) {
//     alert(`Bravo ${currentPlayer.innerHTML} a gagné !`);
//   }
// }
