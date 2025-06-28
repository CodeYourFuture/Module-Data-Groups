// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

//recognize if the count of list items is odd or even.return true for odd and false for even 
function isOddItems(listLength){
  if (listLength % 2 === 0) {
    return false;
  } else {
   return true;
  }
}

//calculate Median for lists with Odd count items
function calculateMedianOddCount(oddList){
  const middleIndex = Math.floor(oddList.length / 2);
    return oddList.splice(middleIndex, 1)[0];
   
}

//calculate Median for lists with even count items
function calculateMedianEvenCount(evenList) {
  const mid1 = evenList[evenList.length / 2 - 1];
  const mid2 = evenList[evenList.length / 2];
  return (mid1 + mid2) / 2;
  
}

//If all array's items are numbers returns true
function numericValues(list){
  return list.every(item => typeof item ==="number");

}

function nonNumericValues(list){
   if (!Array.isArray(list) ) {
    return true;
   }
   
}

function checkNullOrUndefinedItems(list){
  return list.every((item) => item === null || item === undefined);
}

//make a numeric array of a non-numeric array
function makeNumericArray(mixedArray){
  let numericArray = mixedArray.filter((num) => typeof num === "number");
  numericArray = numericArray.sort();
  if (numericArray.length==0 ) {
    return [];
  } else {
    return numericArray;}
}

function calculateMedian(list) {
  if (nonNumericValues(list)) {
    return null;
  }
  if (checkNullOrUndefinedItems(list)){
    return null;}

  let listCopy=[...list];

  if (Array.isArray(listCopy)) {
    
    listCopy = listCopy.sort();
    
  } else {
    return null;
  }
  if (!numericValues(listCopy)) {
    listCopy = makeNumericArray(listCopy);
    if (listCopy.length == 0) {
      return null;
    }
  }
  if (isOddItems(listCopy.length)) {
    return calculateMedianOddCount(listCopy);
  } else {
    return calculateMedianEvenCount(listCopy);
  }
}

module.exports = calculateMedian;
