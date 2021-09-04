const helpMessage = document.querySelector('.info h2');
const cellsForm = document.forms.cells;
const pleyerInviteString = 'Ход игрока ';
const pleyerHonorString = 'Выиграл игрок ';
const noMoreMovesString = 'Ходов больше нет';
const proposalString = 'Хотите еще раз?';
let presentPlayerIsFirst;
let firstPlayerMoves;
let secondPlayerMoves;
const winCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function prepareHelpMessage(complitSign = false) {
  if (!presentPlayerIsFirst) {
    helpMessage.classList.add('second_player_turn');
  } else {
    helpMessage.classList.remove('second_player_turn');
  }
  if (!complitSign) {
    return pleyerInviteString + (presentPlayerIsFirst ? '1' : '2');
  } else {
    return pleyerHonorString + (presentPlayerIsFirst ? '1' : '2');
  }
}

function initGamefield() {
  presentPlayerIsFirst = true;
  firstPlayerMoves = [];
  secondPlayerMoves = [];
  const cellsNumber = 9;
  helpMessage.innerHTML = prepareHelpMessage();
  cellsForm.innerHTML = prepareCells(cellsNumber);
  cellsForm.addEventListener('change', movesHandler);
  document.addEventListener('keydown', modalKeyHandler);

  function prepareCells(numberOfCells) {
    let renderString = '';
    for (let i = 0; i < numberOfCells; i++) {
      renderString += `<input type="checkbox" id="${i + 1}"/><label for="${
        i + 1
      }" class="cell"></label>`;
    }
    return renderString;
  }
}

let avaiableCellsArray;
function modalKeyHandler(e) {
  avaiableCellsArray = [...document.querySelectorAll('input[type=checkbox]:not(:disabled)')];
  if (e.key === 'Tab') {
    if (e.shiftKey) {
      if (document.activeElement === avaiableCellsArray[0]) {
        e.preventDefault();
        avaiableCellsArray[avaiableCellsArray.length - 1].focus();
      }
    } else {
      if (document.activeElement === avaiableCellsArray[avaiableCellsArray.length - 1]) {
        e.preventDefault();
        avaiableCellsArray[0].focus();
      }
    }
  }
}

function movesHandler(e) {
  let winSign;
  e.target.disabled = true;
  avaiableCellsArray = [...document.querySelectorAll('input[type=checkbox]:not(:disabled)')];
  navigator.vibrate(200);
  if (presentPlayerIsFirst) {
    e.target.nextSibling.classList.add('checked_by_x');
    firstPlayerMoves.push(+e.target.id);
    winSign = checkResults(firstPlayerMoves);
  } else {
    e.target.nextSibling.classList.add('checked_by_0');
    secondPlayerMoves.push(+e.target.id);
    winSign = checkResults(secondPlayerMoves);
  }
  if (winSign) {
    helpMessage.innerHTML = prepareHelpMessage(true);
    avaiableCellsArray.forEach(item => (item.disabled = true));
    startAgain();
    return;
  }
  if (avaiableCellsArray.length === 0) {
    helpMessage.innerHTML = noMoreMovesString;
    startAgain();
    return;
  }
  presentPlayerIsFirst = !presentPlayerIsFirst;
  helpMessage.innerHTML = prepareHelpMessage();

  function checkResults(movesArray) {
    if (movesArray.length < 3) {
      return false;
    }
    return winCombinations.some(value => movesArray.hasAll(value));
  }

  function startAgain() {
    helpMessage.insertAdjacentHTML(
      'afterEnd',
      `<button class="proposal_button">${proposalString}</button>`,
    );
    let proposalButton = document.querySelector('.proposal_button');
    proposalButton.focus();
    proposalButton.addEventListener('click', restartGame);

    function restartGame() {
      proposalButton.removeEventListener('click', restartGame);
      proposalButton.remove();
      initGamefield();
    }
  }
}

Array.prototype.hasAll = function (testArray) {
  return testArray.every(item => this.includes(item));
};

initGamefield();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(registration => {
      console.log('Service worker successfully registered', registration);
    })
    .catch(error => {
      console.log('Service worker registration failed', error);
    });
}
