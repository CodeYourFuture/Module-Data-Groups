function sum(array) {
  if (!Array.isArray(array)) throw new Error(array + " is not an array");
  let numbersArray = array.filter((value) => typeof value === "number");
  let initialValue = 0;
  let sum = numbersArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sum;
}

module.exports = sum;
