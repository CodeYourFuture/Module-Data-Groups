function sum(elements) {
  let total = 0;
  for (const myNum of elements) {
    if (typeof myNum === "number" && !Number.isNaN(myNum)) {
      total += myNum;
    }
  }
  return total;
}

module.exports = sum;
