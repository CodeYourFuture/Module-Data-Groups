function sum(elements) {
  let sum = 0;
  let hasNumber = false;

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number") {
      sum += elements[i];
      hasNumber = true;
    }
  }
  if (hasNumber === false && elements.length >0) {
    return undefined;
  }
  return sum;
}

module.exports = sum;
