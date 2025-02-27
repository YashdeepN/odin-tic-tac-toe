function player(name) {
  let score = 0;

  function increaseScore() {
    ++score;
  }
  return { name, increaseScore };
}

function gameBoard() {
  const arr = ["", "", "", "", "", "", "", "", ""];
  function placeValue(value, index) {
    if (!arr[index]) {
      arr[index] = value;
    }
  }
  return { arr, placeValue };
}

const game = gameBoard();

game.placeValue("ku", 0);
console.log(game.arr);
