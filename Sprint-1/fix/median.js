// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  //if list not and array return null, 
  // this check first because no sense to check else if list not array
  if (!(list instanceof Array)) {
    return null;
  }
  // if no numbers in list return null
  if (!containsNumbersCheck(list)) {
    return null;
  }
  let sortedCopy = makeSortedCopyOfArr(list);
  let middleIndex = Math.floor(sortedCopy.length / 2);
  let median;
  //to avoid modification of original copy off list created in separate function

  if (sortedCopy.length % 2 == 1) {
    median = sortedCopy.splice(middleIndex, 1)[0];
  } else {// if list length not even number
    median = (sortedCopy[middleIndex] + sortedCopy[middleIndex - 1]) / 2;
  }
  return median;
}

function makeSortedCopyOfArr(arr) {
  let sortedCopy = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      sortedCopy.push(arr[i]);
    }
  }
  sortedCopy.sort();
  return sortedCopy;
}

function containsNumbersCheck(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) == 'number') {
      return true;
    }
  }
  return false;
}

module.exports = calculateMedian;
