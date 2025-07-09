// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // check if list variable is array, if not calculateMedian() returns null
  if (!(list instanceof Array)){
    return null;
  }
  // check if list contains numbers, if not calculateMedian() returns null 
  let containsNumbers = false;
  for (let i = 0; i < list.length; i++){
    if (typeof list[i] == 'number'){
      containsNumbers = true;
      break;
    }
  }
  if ( containsNumbers == false){
    return null;
  }
  // creating copy of list to avoid modification of original array
  let numbersList = [];
  for (let i = 0; i < list.length; i++){
    if (typeof list[i] == 'number'){ // add value to new array only if it is numeric
      numbersList.push(list[i]);
    }
  }
  // sort resulting array
  numbersList.sort();
  //find middle index
  let middleIndex = Math.floor(numbersList.length / 2);
  let median;
  if ( numbersList.length%2 != 0 ){// check if array elements quantity is odd number
    median = numbersList.splice(middleIndex, 1)[0];
  } else {// if quantity is even median calculated in other vay:
    median = (numbersList[middleIndex-1]+numbersList[middleIndex])/2;
  }
  return median;
}

module.exports = calculateMedian;
