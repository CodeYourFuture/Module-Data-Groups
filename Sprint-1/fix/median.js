// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // First of all, we check if list is an array.
  if (!Array.isArray(list)) {
    return null
  } 
 // the next code from 13 to 16create a new Array called listFiltered checking if the elements are numbers and no NaN>
  const listFiltered = list.filter(checkElement);
   function checkElement(n){
    return typeof n === "number" && n != isNaN;
   }
   // return null if there are not numbers in the list.
  if (listFiltered.length == 0) {
  return null
  }
  // sort the list
  listFiltered.sort();
  const middleIndex = Math.floor(listFiltered.length / 2);
  // check for even or odd amount of numbers in the list
   if (listFiltered.length % 2 == 0) {
    const median = (listFiltered[middleIndex - 1] + listFiltered[middleIndex]) / 2;
    return median 
  } else { 
    const median = listFiltered.splice(middleIndex, 1)[0];
    return median 
  }
}
module.exports = {calculateMedian}
