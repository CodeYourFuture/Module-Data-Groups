function findMax(elements) {
  // checking if input is array
  if (!Array.isArray(elements)) return null;
  //checking if array is empty
  if (elements.length === 0) return -Infinity;
  //filtering only numbers
  const numbersOnly = elements.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  //if array contains only non numbers
  if (elements.every((x) => typeof x !== "number" || isNaN(x)))
    return undefined;
  //when array is of length 1
  if (numbersOnly.length === 1) return elements[numbersOnly.length - 1];

  //when dealing with negative and positive numbers

  if (numbersOnly.length > 1) {
    return Math.max(...numbersOnly);
  }
}

module.exports = findMax;
