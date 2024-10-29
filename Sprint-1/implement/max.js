function isEmpty(elements) {
  return Array.isArray(elements) && elements.length === 0;
}

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
