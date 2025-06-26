function findMax(elements) {
  //if element is empty returns infinity
  if (elements.length === 0) return -Infinity;
  //excludes all non-numbers and sorts the array in ascending order
  const omnlyNumbers = elements
    .filter((item) => typeof item === "number")
    .sort((a, b) => a - b);
    //if the array has only one element and is a number it prints that number
    if (typeof omnlyNumbers[0] === "number" && omnlyNumbers.length === 1)
      return omnlyNumbers[0];
  //it retrieves the last element of the array
  const largestNumber = omnlyNumbers.splice(omnlyNumbers.length - 1)[0];
  return largestNumber;
}
console.log(findMax([-9,-45,-6]))
//findMax([-9, -45, -6]);
module.exports = findMax;
