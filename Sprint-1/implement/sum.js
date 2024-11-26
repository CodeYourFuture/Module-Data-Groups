function sum(elements) {
  return elements
    .filter((el) => typeof el === "number")
    .reduce((total, num) => total + num, 0);
}

module.exports = sum;
