// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if(!Array.isArray(list)){return null;}
  const number  = list.filter(n => typeof n === "number");
  if(number.length  === 0) {return null;}
  number.sort((a,b) => a-b)
  const middleIndex = Math.floor(number.length / 2);


  if(number.length%2===0){return (number[middleIndex-1] + number[middleIndex])/2;
  }
  else return number[middleIndex];
}



module.exports = calculateMedian