function findMax(elements) {
  let largestNumber = elements[0];
  if (elements.length === 0) {
    return -Infinity;
  }

  if (elements.length === 1) {
    return largestNumber;
  }

  if (elements.every((el) => typeof el === "number")) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i] > largestNumber) {
        largestNumber = elements[i];
      }
    }
    return largestNumber;
  }

  if (elements.every((el) => typeof el === "string")) {
    const allString = elements.sort();
    return allString[0];
  }

  if (elements.some((el) => typeof el !== "number")) {
    let numbers = [];
    for (let i = 0; i < elements.length; i++) {
      if (typeof elements[i] === "number") {
        numbers.push(elements[i]);
      }
    }
    return Math.max(...numbers);
  }
}

module.exports = findMax;
