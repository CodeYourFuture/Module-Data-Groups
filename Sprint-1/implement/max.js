function findMax(elements) {
  if (elements.length === 0 || elements.every((el) => typeof el !== "number")) {
    return -Infinity;
  } else {
    return Math.max(...elements.filter((el) => typeof el === "number"));
  }
}

module.exports = findMax;
