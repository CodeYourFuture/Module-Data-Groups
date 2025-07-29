function findMax(elements) {
 
  //excludes all non-numbers and sorts the array in ascending order
  const omnlyNumbers = elements
    .filter((item) => typeof item === "number" && !Number.isNaN(item))
    .sort((a, b) => a - b);
  if(omnlyNumbers.length===0)  return -Infinity;

  //it retrieves the last element of the array
  const largestNumber = omnlyNumbers.splice(omnlyNumbers.length - 1)[0];
  return largestNumber;
}

module.exports = findMax;
