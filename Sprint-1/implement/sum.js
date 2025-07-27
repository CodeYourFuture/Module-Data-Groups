function sum(elements) {
   if (!Array.isArray(elements) || elements.length == 0 ) {
    return 0;
  }
  const numbers = elements.filter((n) => typeof n === "number");
  //If an array with one number it should return the value of the element
  if (numbers.length == 0) {
    return 0;
  }
  if (numbers.length == 1) {
    return numbers[0];
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  sum = parseFloat(sum.toFixed(5));
  return sum;
}

module.exports = sum;
