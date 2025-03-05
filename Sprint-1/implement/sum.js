function sum(elements) {
  const numericElements = elements.filter((el) => typeof el === "number");

  return numericElements.reduce((acc, num) => acc + num, 0);
}

module.exports = sum;
