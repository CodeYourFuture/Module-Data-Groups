// function dedupe(arr) {
//   const uniqueArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;

//     // iterates over uniqueArray and checks if arr[i] is in that array
//     for (let j = 0; j < uniqueArray.length; j++) {
//       if (arr[i] === uniqueArray[j]) {
//         isDuplicate = true;
//       }
//     }

//     // if arr[i] is not already in uniqueArray, add it to uniqueArray
//     if (isDuplicate === false) {
//       uniqueArray.push(arr[i]);
//     }
//   }

//   return uniqueArray;
// }
// Refactored code using SET
function dedupe(arr) {
  return [...new Set(arr)]; // Convert Set back to an array
}

console.log(dedupe([1, 2, 3, 3, 4, 4, 5, 8, 8]));

module.exports = dedupe;
