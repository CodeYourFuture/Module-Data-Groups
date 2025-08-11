function findMax(elements) {
  let max = -Infinity;
  for (let el of elements) {
    if (typeof el === "number" && el > max) {
      max = el;
    }
  }
  return max;
}

module.exports = findMax;
