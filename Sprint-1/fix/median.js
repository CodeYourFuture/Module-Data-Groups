// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

// [...list] create a new exactly array but independent
// const sortArr = list.sort((a, b) => a - b); this modify the array

// order the array to find the middle number
//using [...list] is a safe immutable sorting
// const sortArr = [...list].sort((a, b) => a - b);



function calculateMedian(list) { 
  // if is not an array 
  if(!Array.isArray(list)){
    return null;
  }

  //checking only numbers and not null and empty
  const numsOnly = list.filter(
    (n) => typeof n === "number" && n !== null && !isNaN(n)
  );

  //if return numbers check if after cleaning the length is same as expected or empty
  if (numsOnly.length === 0) {
    return null;
  }

  // now we change to use the numsOnly otherwise will take string as numbers
  const sortArr = [...numsOnly].sort((a, b) => a - b);

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
