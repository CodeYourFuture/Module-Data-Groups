function sum(array) {
  let result = 0;
  for (const element of array) {
    if (typeof element === "number") {
      result += element;
    }
  }
  return result;
}

module.exports = sum;
