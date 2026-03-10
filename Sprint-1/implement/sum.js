function sum(elements) {
  let total = 0;
  for (const element of elements) {
    if (typeof element === "number") {
      total += element;
    }
  }
  return total;
}

module.exports = sum;
