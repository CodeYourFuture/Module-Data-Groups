// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  let newArr = list.sort();
  console.log(newArr)
  if(newArr.length % 2 === 0){
    const middle = newArr.length / 2;
    const sumTwo = newArr[middle] + newArr[ middle - 1 ];
    console.log(sumTwo)
    const median =  sumTwo / 2 ;
    return median;
  }
  else{
      const middleIndex = Math.floor(newArr.length / 2);
      const median = newArr.splice(middleIndex, 1)[0];
      return median;
  }
}

console.log(calculateMedian([]));

module.exports = calculateMedian;
