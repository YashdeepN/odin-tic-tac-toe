function player(name) {
  let score = 0;

  function increaseScore() {
    ++score;
  }
  return { name, increaseScore };
}
