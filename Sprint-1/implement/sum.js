function sum(elements) {
  const sumElements = elements.reduce((total, num) => {
    if (Number.isFinite(num)) {
      return total + num;
    }
    return total;
  }, 0);

  return parseFloat(sumElements.toFixed(10));
}

module.exports = sum;
