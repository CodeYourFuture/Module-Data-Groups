const isEmpty = require("./isEmpty.js");

function findMax(elements) {
  if (isEmpty(elements)) {
    return -Infinity;
  }
  //ensure that num in elements is > max initially
  let max = -Infinity;

  for (let num of elements) {
    if (!isNaN(num) && num > max) {
      max = num;
    }
  }
  return max;
}

module.exports = findMax;
