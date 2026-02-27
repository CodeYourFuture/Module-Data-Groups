// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

// [...list] create a new exactly array but independent

function calculateMedian(list) { 
  // order the array to find the middle number
  //we will use the spread operator to save with no order.
  const sortArr = list.sort((a, b) => a - b);
  console.log(sortArr);

  // divide the array to find the middle position.
  const middleIndex = Math.floor(sortArr.length / 2);

  //if residual is 0, when the array is even
  if (sortArr.length % 2 === 0) {
    const leftHalf = sortArr[middleIndex - 1];
    const rightHalf = sortArr[middleIndex];
    return (leftHalf + rightHalf) / 2;
  }
  return sortArr[middleIndex];
  
}

module.exports = calculateMedian;
