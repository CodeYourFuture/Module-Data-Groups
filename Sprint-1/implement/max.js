function findMax(elements) {
  let maxNum = -Infinity;

  if(elements.length === 0) {
    return -Infinity;
  }

  for (element of elements) {
    if(typeof element === 'number' && element > maxNum) {
      maxNum = element;
    }
  }
  return maxNum;
}

module.exports = findMax;
