// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).


function isOddItems(listLength){
  if (listLength % 2 === 0) {
    return false;
  } else {
   return true;
  }
}

function calculateMedianOddCount(oddList){
  const middleIndex = Math.floor(oddList.length / 2);
  return oddList.splice(middleIndex, 1)[0];
   
}

function calculateMedianEvenCount(evenList) {
  const mid1 = evenList[evenList.length / 2 - 1];
  const mid2 = evenList[evenList.length / 2];
  return (mid1 + mid2) / 2;
  
}


function calculateMedian(list) {
  list=list.sort();
  if (isOddItems(list.length)){
   return calculateMedianOddCount(list);
  }
  else{
    return calculateMedianEvenCount(list);
  }
}

module.exports = calculateMedian;
