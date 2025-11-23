function sum(elements) {
  return elements
    .filter((el) => typeof el === "number")
    .reduce((acc, curr) => acc + curr, 0);
}

module.exports = sum;
