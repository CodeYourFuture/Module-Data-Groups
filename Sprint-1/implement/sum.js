function sum(elements) {
  return elements
    .filter((element) => typeof element === "number")
    .reduce((acc, num) => acc + num, 0);
}

module.exports = sum;
