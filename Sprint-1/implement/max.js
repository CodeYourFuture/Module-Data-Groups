function findMax(elements) {
  //if element is empty returns infinity
  if (elements.length === 0) return -Infinity;

  //excludes all non-numbers and sorts the array in ascending order
  const omnlyNumbers = elements
    .filter((item) => typeof item === "number")
    .sort((a, b) => a - b);

  //it retrieves the last element of the array
  const largestNumber = omnlyNumbers.splice(omnlyNumbers.length - 1)[0];
  return largestNumber;
}

module.exports = findMax;
