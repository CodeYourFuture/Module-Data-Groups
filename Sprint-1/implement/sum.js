function sum(elements) {
  const sum = elements.reduce((sum, number) => {
    return number + sum;
  }, 0);
  return sum;
}
module.exports = sum;
