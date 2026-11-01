function findMax(elements) {
  let max = elements[0];
  for (let num of elements) {
    if (max < num) {
      max = num;
    }
  }
  return max;
}

module.exports = findMax;
