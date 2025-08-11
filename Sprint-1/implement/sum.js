function sum(elements) {
  let total = 0;

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && !isNaN(elements[i])) {
      total += elements[i];
    }
  }
  return Number(total.toFixed(2));
}

module.exports = sum;
