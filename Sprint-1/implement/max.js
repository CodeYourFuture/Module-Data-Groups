function findMax(array) {
  let result = -Infinity;

  for (const element of array) {
    if (typeof element === "number" && element > result) {
      result = element;
    }
  }
  return result;
}

module.exports = findMax;
