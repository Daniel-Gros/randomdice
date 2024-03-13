// ****** SÉLÉCTION DES ÉLÉMENTS DU DOM & STOCKAGE VARIABLES ******

const diceImage = document.querySelectorAll('.dice-images img');
const newGameButton = document.querySelector('#newgame');
const rollDiceButton = document.querySelector(".roll-dice");
const holdDiceButton = document.querySelector(".hold-dice");
// ****** VARIABLES ******

let scores, roundScore, activePlayer, gamePlaying;

const initGame = () => {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.querySelector('.current-score-1').textContent = "0";
  document.querySelector('.current-score-2').textContent = "0";
  document.querySelector('.total-score-1').textContent = "0";
  document.querySelector('.total-score-2').textContent = "0";
  // ****** JOUEUR 1 ACTIF PAR DÉFAUT ******
  document.querySelectorAll('.current-dice').forEach((element)=> {
    element.classList.remove('active');
  });
  document.querySelector('.current-dice').classList.add('active');
  // ****** AFFICHE SEULEMENT LA FACE 1 DU DÉ ******
  diceImage.forEach((dice, index) => {
    if (index === 0) {
      dice.classList.remove("hidden");
    } else {
      dice.classList.add("hidden");
    }
  }
  );
};

// ****** FONCTIONS ******
const randomDice = () => {
  if(gamePlaying) {
    let diceNumber = Math.floor(Math.random() * 6) +1;
    showDice(diceNumber);
    if (diceNumber !== 1) {
      roundScore += diceNumber;
      document.querySelector(`.current-score-${activePlayer + 1}`).textContent = roundScore;
    } else {
      alert('Vous avez fait 1, c\'est au tour de l\'autre joueur');
      document.querySelector(`.current-score-${activePlayer + 1}`).textContent = "0";
      nextPlayer();
    }
  }
}

const showDice = (number) => {
  diceImage.forEach((dice, index) => {
    if (index === (number -1)) {
      dice.classList.remove('hidden');
    } else {
      dice.classList.add('hidden');
    }
  });
};

const holdScore = () => {
  if(gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector(`.total-score-${activePlayer + 1}`).textContent = scores[activePlayer];
    roundScore = 0;
    if (scores[activePlayer] >= 100) {
      alert (`Le joueur ${activePlayer + 1} a gagné !`);
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
};

const nextPlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
  roundScore = 0;
  document.querySelector('.current-dice').classList.toggle('active');
  document.querySelectorAll('.current-dice')[activePlayer].classList.add('active');
};

// ****** ÉVÉNEMENTS ET DÉBUT DE PARTIE ******

newGameButton.addEventListener("click", initGame);
rollDiceButton.addEventListener("click", randomDice);
holdDiceButton.addEventListener("click", holdScore);

initGame();