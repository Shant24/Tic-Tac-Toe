// let turn = true;
// let esim = [];
// const square1 = document.getElementById("square1");
// const square2 = document.getElementById("square2");

// square1.addEventListener("click", (e) => {
//     if(esim[0] === false) {
//         esim[0] = true;
//         // e.currentTarget.innerHTML = "x";
//         e.currentTarget.className = "square selectedX";
//     } else {
//         esim[0] = false;
//         // e.currentTarget.innerHTML = "o";
//         e.currentTarget.className = "square selectedO";
//     }
// });

// square2.addEventListener("click", (e) => {
//     if(esim[1] === false) {
//         esim[1] = true;
//         // e.currentTarget.innerHTML = "x";
//         e.currentTarget.className = "square selectedX";
//     } else {
//         esim[1] = false;
//         // e.currentTarget.innerHTML = "o";
//         e.currentTarget.className = "square selectedO";
//     }
// });

// square1.addEventListener("click", (e) => {
//     if (esim[0] !== undefined) {
//         return;
//     }
//     if(turn) {
//         // e.currentTarget.innerHTML = "x";
//         e.currentTarget.className = "square selectedX";
//     } else {
//         // e.currentTarget.innerHTML = "o";
//         e.currentTarget.className = "square selectedO";
//     }
//     esim[0] = true;
//     changeTurn();
// });

// square2.addEventListener("click", (e) => {
//     if (esim[1] !== undefined) {
//         return;
//     }
//     if(turn) {
//         // e.currentTarget.innerHTML = "x";
//         e.currentTarget.className = "square selectedX";
//     } else {
//         // e.currentTarget.innerHTML = "o";
//         e.currentTarget.className = "square selectedO";
//     }
//     esim[1] = true;
//     changeTurn();
// });

// changeTurn = () => (turn = !turn);

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
      winner[]
      // color.dataset.number.className = "selected selectedX winner";
      // alert("Winner X");
    } else {

      // color.target.className = "selected selectedY winner"
      // alert("Winner O");
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
