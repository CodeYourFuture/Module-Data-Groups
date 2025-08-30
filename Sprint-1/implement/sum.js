function sum(elements) {
  let result = 0;

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number") {
      result += elements[i];
    }
  }
  return result;
}

module.exports = sum;
