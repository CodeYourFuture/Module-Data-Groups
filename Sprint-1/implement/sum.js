const isEmpty = require("./isEmpty.js");

function isOdd(n) {
  return !isNaN(n) && n % 2 !== 0;
}

function sum(elements) {
  let sum = 0;
  if (isEmpty(elements)) {
    return 0;
  }
  for (let num of elements) {
    isOdd(num)
      ? (sum += parseFloat(num.toFixed(2)))
      : !isNaN(num) && (sum += num);
  }
  sum = parseFloat(sum.toFixed(2));
  return sum;
}

module.exports = sum;
