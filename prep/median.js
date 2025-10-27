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
  let median = "no implementation for this test case yet";
  const arrayLength = list.length; // 3
  if (arrayLength % 2 !== 0) {
    const lengthDividedByTwo = Math.floor(arrayLength / 2);
    median = lengthDividedByTwo;

  }
  return list[median];
}

const actualOutput = calculateMedian([10, 20, 30, 40, 50]);
console.log("median", actualOutput);