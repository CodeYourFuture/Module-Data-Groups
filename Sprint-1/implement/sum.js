function sum(elements) {
  let sum = 0;
  for (let i = 0; i < elements.length; i++) {
    if (Number.isFinite(elements[i])) {
      sum += elements[i];
    }
  }
  return sum;
}

module.exports = sum;
