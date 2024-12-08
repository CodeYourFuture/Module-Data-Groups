function sum(elements) {
  let totalSum = 0;

  for (element of elements) {
    if (typeof element === 'number') {
      totalSum += element;
    }
  }
  return totalSum;
}

module.exports = sum;
