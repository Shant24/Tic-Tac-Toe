let turn = true;
let steps = [];

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

const check = color => {
  const winner = answers.some(kombinacia => {
    return (
    steps[kombinacia[0]] !== undefined &&
    steps[kombinacia[0]] === steps[kombinacia[1]] &&
    steps[kombinacia[1]] === steps[kombinacia[2]]
  );
  });

  if (winner) {
    if (turn == true) {
      alert("Winner - '\u2715'");
    } else {
      alert("Winner - '\u25EF'");
    }

    document.getElementById("field").removeEventListener("click", press);
  }
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

document.getElementById("field").addEventListener("click", press);
