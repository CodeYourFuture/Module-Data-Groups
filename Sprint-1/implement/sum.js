function sum(elements) {
  if (elements.length < 1) {
    return 0;
  }
  //If an array with one number it should return the value of the element
  if (elements.length == 1) {
    return elements[0];
  }

  let sum = 0;
  let flag = false;
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number") {
      sum += elements[i];
      flag = true;
    }
  }
  if (flag) {
    return sum;
  } else return -Infinity;
}

module.exports = sum;
