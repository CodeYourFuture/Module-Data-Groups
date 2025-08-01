function sum(elements) {
  return elements
    .filter((element) => typeof element === "number") // Filter out non-numerical elements
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sum the numerical elements
}

module.exports = sum;
