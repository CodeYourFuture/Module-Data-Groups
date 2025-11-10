// How to calculate the median of an array by mutating the array

// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2);
//   const median = list.splice(middleIndex, 1)[0];
//   console.log("middleIndex", middleIndex);
//   console.log(list);
//   return median;
// }

// const actualOutput = calculateMedian([1, 2, 3]);
// console.log("median", actualOutput);
module.exports = calculateMedian;

// How to calculate the median of an array without muatating the array
function calculateMedian(list) {
  let medianIndex;
  let actualMedian;
  const arrayLength = list.length; // 3
  if (arrayLength % 2 !== 0) {
    medianIndex = (arrayLength + 1) / 2;
    actualMedian = list[medianIndex - 1];
  } else {
    medianIndex = arrayLength / 2;

    firstMedianIndex = list[medianIndex - 1];
    secondMedianIndex = list[medianIndex];
    actualMedian = (firstMedianIndex + secondMedianIndex) / 2;
  }
  return actualMedian;
}
