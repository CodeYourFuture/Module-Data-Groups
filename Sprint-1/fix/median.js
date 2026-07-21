// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  //for (let i = 0; i < list.length; i++) {
    //if (typeof list[i] !== "number" && typeof list[i] === " ") {
      // List is checked whether it is numbers and strings.
      //return null; // Null is returned if list is not numbers or has mixed values(numbers and strings)
    //}
   
   if (!Array.isArray(list) || list.length === 0) {
    return null;
   }

  const newArray = [...list];
  newArray.sort((a, b) => a - b);
  const middleIndex = Math.floor(newArray.length / 2);
  // const median = list.splice(middleIndex, 1)[0];
  //return median;

  if (newArray.length % 2 === 0) {
    return (newArray[middleIndex - 1] + newArray[middleIndex]) / 2;
  }
  return newArray[middleIndex];
}
console.log(calculateMedian([3, 1, 2]));
module.exports = calculateMedian;
