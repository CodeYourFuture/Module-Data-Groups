function sum(elements) {
  if (elements.length === 0) {
    return 0;
  }

  return elements
    .filter((item) => typeof item === "number")
    .reduce((acc, num) => acc + num, 0);
}

module.exports = sum;
