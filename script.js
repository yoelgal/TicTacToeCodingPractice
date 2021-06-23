'use strict';

let scores,
  playing,
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

// ELEMENTS
const btnNew = document.querySelector('.btn--new');
const title = document.querySelector('.title');

const cross1 = document.getElementById('c1');
const cross2 = document.getElementById('c2');
const cross3 = document.getElementById('c3');
const cross4 = document.getElementById('c4');
const cross5 = document.getElementById('c5');
const cross6 = document.getElementById('c6');
const cross7 = document.getElementById('c7');
const cross8 = document.getElementById('c8');
const cross9 = document.getElementById('c9');

const nought1 = document.getElementById('n1');
const nought2 = document.getElementById('n2');
const nought3 = document.getElementById('n3');
const nought4 = document.getElementById('n4');
const nought5 = document.getElementById('n5');
const nought6 = document.getElementById('n6');
const nought7 = document.getElementById('n7');
const nought8 = document.getElementById('n8');
const nought9 = document.getElementById('n9');

const u1 = document.getElementById('u1');
const u2 = document.getElementById('u2');
const u3 = document.getElementById('u3');
const u4 = document.getElementById('u4');
const u5 = document.getElementById('u5');
const u6 = document.getElementById('u6');
const u7 = document.getElementById('u7');
const u8 = document.getElementById('u8');
const u9 = document.getElementById('u9');

const line1 = document.getElementById('l1');
const line2 = document.getElementById('l2');
const line3 = document.getElementById('l3');
const line4 = document.getElementById('l4');
const line5 = document.getElementById('l5');
const line6 = document.getElementById('l6');
const line7 = document.getElementById('l7');
const line8 = document.getElementById('l8');

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

  playing = true;

  crossPositions = [];
  noughtPositions = [];
  success = false;
  crossWin = false;
  noughtWin = false;

  score0El.textContent = scores[0];
  score1El.textContent = scores[1];

  cross1.classList.add('hidden');
  cross2.classList.add('hidden');
  cross3.classList.add('hidden');
  cross4.classList.add('hidden');
  cross5.classList.add('hidden');
  cross6.classList.add('hidden');
  cross7.classList.add('hidden');
  cross8.classList.add('hidden');
  cross9.classList.add('hidden');

  nought1.classList.add('hidden');
  nought2.classList.add('hidden');
  nought3.classList.add('hidden');
  nought4.classList.add('hidden');
  nought5.classList.add('hidden');
  nought6.classList.add('hidden');
  nought7.classList.add('hidden');
  nought8.classList.add('hidden');
  nought9.classList.add('hidden');

  line1.classList.add('hidden');
  line2.classList.add('hidden');
  line3.classList.add('hidden');
  line4.classList.add('hidden');
  line5.classList.add('hidden');
  line6.classList.add('hidden');
  line7.classList.add('hidden');
  line8.classList.add('hidden');

  u1.classList.remove('hidden');
  u2.classList.remove('hidden');
  u3.classList.remove('hidden');
  u4.classList.remove('hidden');
  u5.classList.remove('hidden');
  u6.classList.remove('hidden');
  u7.classList.remove('hidden');
  u8.classList.remove('hidden');
  u9.classList.remove('hidden');
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
  // 1. determine which line to show
  if (winningNumber === 1) {
    line1.classList.remove('hidden');
  } else if (winningNumber === 2) {
    line2.classList.remove('hidden');
  } else if (winningNumber === 3) {
    line3.classList.remove('hidden');
  } else if (winningNumber === 4) {
    line4.classList.remove('hidden');
  } else if (winningNumber === 5) {
    line5.classList.remove('hidden');
  } else if (winningNumber === 6) {
    line6.classList.remove('hidden');
  } else if (winningNumber === 7) {
    line7.classList.remove('hidden');
  } else if (winningNumber === 8) {
    line8.classList.remove('hidden');
  } else if (winningNumber === 9) {
    line9.classList.remove('hidden');
  }

  // 2. make 'unused' disappear
  u1.classList.add('hidden');
  u2.classList.add('hidden');
  u3.classList.add('hidden');
  u4.classList.add('hidden');
  u5.classList.add('hidden');
  u6.classList.add('hidden');
  u7.classList.add('hidden');
  u8.classList.add('hidden');
  u9.classList.add('hidden');
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
    u1.classList.contains('hidden') &&
    u2.classList.contains('hidden') &&
    u3.classList.contains('hidden') &&
    u4.classList.contains('hidden') &&
    u5.classList.contains('hidden') &&
    u6.classList.contains('hidden') &&
    u7.classList.contains('hidden') &&
    u8.classList.contains('hidden') &&
    u9.classList.contains('hidden') &&
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

u1.addEventListener('click', function () {
  if (success === false) {
    u1.classList.add('hidden');
    if (activePlayer === 0) {
      cross1.classList.remove('hidden');
      crossPositions.push(1);
    } else {
      nought1.classList.remove('hidden');
      noughtPositions.push(1);
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

u2.addEventListener('click', function () {
  if (success === false) {
    u2.classList.add('hidden');
    if (activePlayer === 0) {
      cross2.classList.remove('hidden');
      crossPositions.push(2);
    } else {
      nought2.classList.remove('hidden');
      noughtPositions.push(2);
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

u3.addEventListener('click', function () {
  if (success === false) {
    u3.classList.add('hidden');
    if (activePlayer === 0) {
      cross3.classList.remove('hidden');
      crossPositions.push(3);
    } else {
      nought3.classList.remove('hidden');
      noughtPositions.push(3);
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

u4.addEventListener('click', function () {
  if (success === false) {
    u4.classList.add('hidden');
    if (activePlayer === 0) {
      cross4.classList.remove('hidden');
      crossPositions.push(4);
    } else {
      nought4.classList.remove('hidden');
      noughtPositions.push(4);
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

u5.addEventListener('click', function () {
  if (success === false) {
    u5.classList.add('hidden');
    if (activePlayer === 0) {
      cross5.classList.remove('hidden');
      crossPositions.push(5);
    } else {
      nought5.classList.remove('hidden');
      noughtPositions.push(5);
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

u6.addEventListener('click', function () {
  if (success === false) {
    u6.classList.add('hidden');
    if (activePlayer === 0) {
      cross6.classList.remove('hidden');
      crossPositions.push(6);
    } else {
      nought6.classList.remove('hidden');
      noughtPositions.push(6);
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

u7.addEventListener('click', function () {
  if (success === false) {
    u7.classList.add('hidden');
    if (activePlayer === 0) {
      cross7.classList.remove('hidden');
      crossPositions.push(7);
    } else {
      nought7.classList.remove('hidden');
      noughtPositions.push(7);
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

u8.addEventListener('click', function () {
  if (success === false) {
    u8.classList.add('hidden');
    if (activePlayer === 0) {
      cross8.classList.remove('hidden');
      crossPositions.push(8);
    } else {
      nought8.classList.remove('hidden');
      noughtPositions.push(8);
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

u9.addEventListener('click', function () {
  if (success === false) {
    u9.classList.add('hidden');
    if (activePlayer === 0) {
      cross9.classList.remove('hidden');
      crossPositions.push(9);
    } else {
      nought9.classList.remove('hidden');
      noughtPositions.push(9);
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

btnNew.addEventListener('click', function () {
  initialize();
});
