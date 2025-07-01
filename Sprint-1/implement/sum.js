function sum(elements) {
  let sum = 0;

  for (const element of elements) {
    if (typeof element === "number" && !isNaN(element)) {
      sum += element;
    }
  }
  return Math.round(sum * 100) / 100;;
}

module.exports = sum;
