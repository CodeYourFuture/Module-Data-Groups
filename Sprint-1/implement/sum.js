function sum(elements) {
  const numericValues = elements.filter((item) => typeof item === "number");
  return numericValues.reduce((acc, num) => acc + num, 0);
}
module.exports = sum;
