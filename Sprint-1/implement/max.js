function findMax(arr) {
  const numbers = arr.filter((num) => typeof num === "number");
  return Math.max(...numbers);
}

module.exports = findMax;
