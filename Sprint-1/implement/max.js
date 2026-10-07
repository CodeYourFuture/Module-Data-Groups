function findMax(elements) {
  const numberArray = elements.filter((el) => typeof el === "number");
  if (numberArray.length === 0) return -Infinity;
  return Math.max(...numberArray);
}

module.exports = findMax;
