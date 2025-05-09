function findMax(elements) {
  let max = -Infinity;
  for (i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && !isNaN(elements[i])) {
      if (elements[i] > max) {
        max = elements[i];
      }
    }
  }
  return max;
}

// console.log(findMax(["l", "j", "o"]));

module.exports = findMax;
