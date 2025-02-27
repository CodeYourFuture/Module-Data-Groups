function findMax(elements) {
  let maxNumber = -Infinity;
  if (elements.length < 1) {
    return -Infinity;
  } else {
    for (let i = 0; i < elements.length; i++) {
      if (typeof elements[i] != `number`) {
        continue;
      } else if (maxNumber < elements[i]) {
        maxNumber = elements[i];
      }
    }
    return maxNumber === -Infinity ? `Error` : maxNumber;
  }
}

console.log(findMax([`Apple`, "Dog", "sun", "Horse"]));

module.exports = findMax;
