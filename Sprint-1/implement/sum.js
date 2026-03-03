function sum(elements) {
  if (!Array.isArray(elements)) {
    return 0;
  }

  return elements
    .filter((element) => typeof element === "number" && !Number.isNaN(element))
    .reduce((total, number) => total + number, 0);
}

module.exports = sum;
