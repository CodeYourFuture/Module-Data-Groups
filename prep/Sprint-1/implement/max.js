function findMax(elements) {
  const numbers = elements.filter((el) => typeof el === "number"); //filters non-numeric values
  // filter() goes through the elements and keeps the values that are only numbers; typeof el === "number" checks if each value is a number
  return numbers.length > 0 ? Math.max(...numbers) : -Infinity; // if there are no numbers, it returns -infinity
}
// numbers.length > 0 (means that at least one number exists), if num exists, Math.max(...numbers), finds the largest num; if no numbers exist, it returns -infinity
// Math.max works only on seperate values not an array; (...numbers, a spread syntax), is used to pass each number in an array seperately so they act as individual values
module.exports = findMax;
