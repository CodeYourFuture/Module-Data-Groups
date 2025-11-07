function sum(elements) {
  let total = 0;
  // Filter out non-numerical elements
  const numericalElements = elements.filter((item) => typeof item === "number");
  for (const item of numericalElements) {
    total += item;
  }
  if (numericalElements.length > 0) {
    return total;
  } else {
    return 0;
  }
}

// console.log(sum(["hey", 10, "hi", 60, 10]));

module.exports = sum;
