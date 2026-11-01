function sum(elements) {
  let total = 0;
  for (const num of elements) {
    total += num;
  }
  return total;
}

module.exports = sum;
