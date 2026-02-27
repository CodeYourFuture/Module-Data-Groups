// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (Array.isArray(list)) {
    let newList = list.filter(item => typeof item === "number");
    newList = newList.sort(function (a, b) {
      return a - b;
    });
    if (newList.length > 0){
      const middleIndex = Math.floor(newList.length / 2);
      const median = newList[middleIndex]
      if (newList.length % 2 !== 0) {
        return median;
    }
      else return (newList[middleIndex - 1] + median) / 2}
    else return null;}
  else return null;
}

module.exports = calculateMedian;





// function arr(item) {
//   if (typeof item === "number")
//     return true;
//   return false;
// }