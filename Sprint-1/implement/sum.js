function sum(array) {
  if (!Array.isArray(array)) throw new Error(array + " is not an array");
  let numbersArray = array.filter((value) => typeof value === "number");
  const sum = numbersArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
}

module.exports = sum;
