function findMax(array) {
  numbersArray = array.filter((value) => typeof value === "number");
  return Math.max(...numbersArray);
}

module.exports = findMax;
