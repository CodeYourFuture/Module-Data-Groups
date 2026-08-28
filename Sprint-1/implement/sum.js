function sum(elements) {
  let sum = 0;

  for (const i of elements) {
    if (typeof i === "number" && !isNaN(i)) {
      sum += i;
    }
  }

  return sum;
}

module.exports = sum;
