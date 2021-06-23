'use strict';
console.log('SCRIPT TEST');

let scores,
  activePlayer,
  winningNumber,
  crossWin,
  noughtWin,
  success,
  winCounter,
  winnerLine;
let crossPositions;
let noughtPositions;
let matchingWin;
let winningPatterns = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
];

activePlayer = 0;
scores = [0, 0];
let rounds = 0;
let cross = [];
let nought = [];
let u = [];
let line = [];

// ELEMENTS
const btnNew = document.querySelector('.btn--new');
const title = document.querySelector('.title');

cross[0] = document.getElementById('c1');
cross[1] = document.getElementById('c2');
cross[2] = document.getElementById('c3');
cross[3] = document.getElementById('c4');
cross[4] = document.getElementById('c5');
cross[5] = document.getElementById('c6');
cross[6] = document.getElementById('c7');
cross[7] = document.getElementById('c8');
cross[8] = document.getElementById('c9');

nought[0] = document.getElementById('n1');
nought[1] = document.getElementById('n2');
nought[2] = document.getElementById('n3');
nought[3] = document.getElementById('n4');
nought[4] = document.getElementById('n5');
nought[5] = document.getElementById('n6');
nought[6] = document.getElementById('n7');
nought[7] = document.getElementById('n8');
nought[8] = document.getElementById('n9');

u[0] = document.getElementById('u1');
u[1] = document.getElementById('u2');
u[2] = document.getElementById('u3');
u[3] = document.getElementById('u4');
u[4] = document.getElementById('u5');
u[5] = document.getElementById('u6');
u[6] = document.getElementById('u7');
u[7] = document.getElementById('u8');
u[8] = document.getElementById('u9');

line[0] = document.getElementById('l1');
line[1] = document.getElementById('l2');
line[2] = document.getElementById('l3');
line[3] = document.getElementById('l4');
line[4] = document.getElementById('l5');
line[5] = document.getElementById('l6');
line[6] = document.getElementById('l7');
line[7] = document.getElementById('l8');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

// FUNCTIONS
const switchPlayer = function () {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  console.log(success);
};

const initialize = function () {
  rounds++;
  title.textContent = 'Tic Tac Toe';
  player0El.classList.remove('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  if (rounds % 2 == 0) {
    player1El.classList.add('player--active');
    activePlayer = 1;
  } else {
    player0El.classList.add('player--active');
    activePlayer = 0;
  }

  crossPositions = [];
  noughtPositions = [];
  success = false;
  crossWin = false;
  noughtWin = false;

  score0El.textContent = scores[0];
  score1El.textContent = scores[1];

  for (let i = 0; i < cross.length; i++) {
    cross[i].classList.add('hidden');
    nought[i].classList.add('hidden');
    u[i].classList.remove('hidden');
  }

  for (let i = 0; i < line.length; i++) {
    line[i].classList.add('hidden');
  }
};

const checkWinCrosses = function () {
  for (let i = 0; i < winningPatterns.length; i++) {
    winCounter = 0;
    for (let c = 0; c < winningPatterns[i].length; c++) {
      crossPositions.includes(winningPatterns[i][c]) ? winCounter++ : 0;
    }

    if (winCounter === 3) {
      success = true;
      winningNumber = i + 1;
      crossWin = true;
    }
  }
};

const checkWinNoughts = function () {
  for (let i = 0; i < winningPatterns.length; i++) {
    winCounter = 0;
    for (let c = 0; c < winningPatterns[i].length; c++) {
      noughtPositions.includes(winningPatterns[i][c]) ? winCounter++ : 0;
    }

    if (winCounter === 3) {
      success = true;
      winningNumber = i + 1;
      noughtWin = true;
    }
  }
};

const successProtocol = function () {
  // 1. show correct line
  line[winningNumber - 1].classList.remove('hidden');

  // 2. make 'unused' disappear
  for (let i = 0; i < u.length; i++) {
    u[i].classList.add('hidden');
  }
  // 3. change profile of winner
  player0El.classList.remove('player--active');
  player1El.classList.remove('player--active');
  if (crossWin === true) {
    player0El.classList.add('player--winner');
  } else if (noughtWin === true) {
    player1El.classList.add('player--winner');
  }
  title.textContent = 'Winner!';
  // 4. add to score
  if (crossWin === true) {
    scores[0]++;
    score0El.textContent = scores[0];
  } else if (noughtWin === true) {
    scores[1]++;
    score1El.textContent = scores[1];
  }
};

const checkDraw = function () {
  if (
    u[0].classList.contains('hidden') &&
    u[1].classList.contains('hidden') &&
    u[2].classList.contains('hidden') &&
    u[3].classList.contains('hidden') &&
    u[4].classList.contains('hidden') &&
    u[5].classList.contains('hidden') &&
    u[6].classList.contains('hidden') &&
    u[7].classList.contains('hidden') &&
    u[8].classList.contains('hidden') &&
    success === false
  ) {
    player0El.classList.remove('player--active');
    player1El.classList.remove('player--active');

    title.textContent = 'Draw!';
  }
};

// START
initialize();
console.log(activePlayer);

for (let i = 0; i < u.length; i++) {
  u[i].addEventListener('click', function () {
    if (success === false) {
      u[i].classList.add('hidden');
      if (activePlayer === 0) {
        cross[i].classList.remove('hidden');
        crossPositions.push(i + 1);
      } else {
        nought[i].classList.remove('hidden');
        noughtPositions.push(i + 1);
      }

      switchPlayer();
      checkWinCrosses();
      checkWinNoughts();
      if (success === true) {
        successProtocol();
      } else {
        checkDraw();
      }
    }
  });
}

btnNew.addEventListener('click', function () {
  initialize();
});
