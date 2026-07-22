function sum(elements) {
  return elements.reduce((total, element) => {
    if (typeof element === "number") {
      return total + element;
    }
    return total;
  }, 0);
}

module.exports = sum;