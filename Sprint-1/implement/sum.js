function sum(elements) {
  if (elements.length == 0) {
    return 0;
  }
  const numbers = elements.filter((n) => typeof n === "number");
  //If an array with one number it should return the value of the element
  if (numbers.length == 1) {
    return numbers[0];
  }

  let sum = 0;
  let flag = false;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      sum += numbers[i];
      flag = true;
    }
  }
  sum = parseFloat(sum.toFixed(5));
  if (flag) {
    return sum;
  } 
  else return -Infinity;
}

module.exports = sum;
