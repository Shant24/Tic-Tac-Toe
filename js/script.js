let turn = true;
let steps = [];

const field = document.getElementById("field");

const answers = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];

function xWinner() {
  document.getElementById("forX1").innerHTML = "Winner";
  document.getElementById("forO2").innerHTML = "Loser";
}
function oWinner() {
  document.getElementById("forO1").innerHTML = "Winner";
  document.getElementById("forX2").innerHTML = "Loser";
}

const check = () => {
  const finished = answers.some(combination => {
    debugger;
    const hasWinner =
      steps[combination[0]] !== undefined &&
      steps[combination[0]] === steps[combination[1]] &&
      steps[combination[1]] === steps[combination[2]];

    if (hasWinner) {
      markTheWinner(combination);
    }

    return hasWinner;
  });

  if (finished) {
    if (turn == true) {
      xWinner();
    } else {
      oWinner();
    }

    field.removeEventListener("click", press);
  }
};

markTheWinner = combinationForChangeColor => {
  [...field.children].forEach(cell => {
    if (combinationForChangeColor.includes(Number(cell.dataset.number))) {
      cell.classList.add("winner");
      // cell.style.color = "#FF0000";
    }
  });
};

press = e => {
  const index = e.target.dataset.number;

  if (steps[index] !== undefined || e.target === e.currentTarget) {
    return;
  }
  if (turn) {
    e.target.className = "selected selectedX";
  } else {
    e.target.className = "selected selectedO";
  }

  steps[index] = turn;
  check();
  turn = !turn;
};

field.addEventListener("click", press);