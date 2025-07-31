function sum(elements) {
  const numbersOnly = elements.filter((element) => typeof element === "number");
  return numbersOnly.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};
module.exports = sum;
