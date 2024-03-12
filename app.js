// ****** DÉFINITION DES VARIABLES & CONSTANTES ******

const newGameButton = document.getElementById("newgame");
const rollDiceButton = document.getElementById("roll_dice_button");
const holdDiceButton = document.getElementById("hold_dice_button");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");

let currentPlayer , currentScore = [0, 0], totalScore = [0, 0];
let dice = Math.floor(Math.random() * 6 + 1);
let dicePicture = document.getElementById("dice-picture");

const diceFace = () => {
  for (let i = 1; i <= 6; i++) {
    const face = document.getElementById(`face${i}`);
    if (dice === i) {
      face.classList.remove("hidden");
      face.classList.add("active");
    } else {
      face.classList.add("hidden");
      face.classList.remove("active");
    }
  }
};

// ****** DÉFINITION DES FONCTIONS DE TOUR DE JEU ******

const player1turn = () => {
  if (currentPlayer === player1) {
    player1.classList.remove("hidden");
    player1.classList.add("active");
    player2.classList.remove("active");
    player2.classList.add("hidden");
  }
}; 

const player2turn = () => {
  if (currentPlayer === player2) {
    player2.classList.remove("hidden");
    player2.classList.add("active");
    player1.classList.remove("active");
    player1.classList.add("hidden");
  }
};


// ****** DÉFINITION DES FONCTIONS DE DÉPART DU JEU ******
function startNewGame() {
  chooseNames();
}


// ****** CHOIX DU NOM DES JOUEURS AU CLIC SUR NEWGAME ******

function chooseNames() {
  let namePlayer1 = prompt("Entrez le nom du joueur 1");
  if (namePlayer1 === null || namePlayer1 === "") {
    alert("Vous devez choisir un prénom pour le joueur 1");
    chooseNames();
    return;
  }
  let newName1 = document.getElementById("player-1");
  newName1.textContent = namePlayer1;

  let namePlayer2 = prompt("Entrez le nom du joueur 2");
  if (namePlayer2 === null || namePlayer2 === "") {
    alert("Vous devez choisir un prénom pour le joueur 2");
    chooseNames();
    return;
  }
  let newName2 = document.getElementById("player-2");
  newName2.textContent = namePlayer2;

  firstToPlay();
}



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
  alert(`C'est ${currentPlayer.textContent} qui commence !`);
}
rollDice(currentPlayer, currentScore, rollDiceButton);

// ****** FONCTIONS DE JEU ******

function rollDice(currentPlayer) {
  diceFace();
  dice = Math.floor(Math.random() * 6 + 1);
  if (dice !== 1) {
    currentScore[currentPlayer - 1] += dice;
    document.getElementsByClassName("current_score")[0].textContent = currentScore;
    dicePicture.src = `images/dice-${dice}.png`;
  } else {
    switchTurn();
  }
}

function holdDice() {
  totalScore[currentPlayer - 1] += currentScore[currentPlayer - 1];
  document.getElementsByClassName("total_score")[0].textContent = totalScore[currentPlayer - 1];
  currentScore[currentPlayer - 1] = 0;
  document.getElementsByClassName("current_score")[0].textContent = currentScore[currentPlayer - 1];
  if (totalScore[currentPlayer - 1] >= 100) {
    alert(`Bravo ${currentPlayer.textContent} a gagné !`);
  }
  switchTurn();
}

function switchTurn() {
  if (currentPlayer === player1) {
    player2turn();
  } else {
    player1turn();
  }
}

newGameButton.addEventListener("click", startNewGame);
rollDiceButton.addEventListener("click", rollDice);
holdDiceButton.addEventListener("click", holdDice);

// function winTheGame() {
//   if (currentPlayer === 100) {
//     alert(`Bravo ${currentPlayer.textContent} a gagné !`);
//   }
// }
