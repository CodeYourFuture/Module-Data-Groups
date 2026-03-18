function findMax(array) {
  if (!Array.isArray(array)) throw new Error(array + " is not an array");
  const numbersArray = array.filter((value) => typeof value === "number");
  return Math.max(...numbersArray);
}

module.exports = findMax;
