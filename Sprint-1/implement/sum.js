function sum(elements) {
  return elements
    .filter((element) => typeof element === "number" && !Number.isNaN(element))
    .reduce((total, number) => total + number, 0);
}

module.exports = sum;
