function findMax(elements) {
  //First test should return -Infinity
  if (elements.length < 1) {
    return -Infinity;
  }
  //If an array with one number it should return the value of the element
  if (elements.length == 1) {
    return elements[0];
  }

  let max = elements[0];
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] > max && typeof elements[i] === "number") {
      max = elements[i];
    }
  }
  if (typeof max === "number") {
    return max;
  } else return -Infinity;
}

module.exports = findMax;
