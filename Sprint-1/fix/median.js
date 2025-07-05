// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  const arrFilter = list.filter (item => typeof item !== "string" && item != null && item !== undefined && typeof item === "number" && !isNaN(item));
  if (arrFilter.length === 0)
    return null;
  const sortedArr = arrFilter.sort((a,b) => a - b);
  const len = sortedArr.length;
  const middleIndex = Math.floor(len / 2);
  if (len % 2 !== 0){
    return sortedArr[middleIndex];
  } else{
    return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;;
  }
}


// console.log(calculateMedian(["banana", 5, 3, "apple", 1, 4, 2]));

module.exports = calculateMedian;
