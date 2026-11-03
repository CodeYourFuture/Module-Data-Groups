function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }

  let theSum = 0;

  for (element of elements) {
    if (typeof element != "number") {
      throw new Error("sum requires an array of numbers");
    }
    theSum += element;
  }

  return theSum;
}

module.exports = sum;
