
// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory


// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).


function calculateMedian(list) {

 if(!Array.isArray(list)){
  return null;}
const numbersOnly = list.filter(item => typeof item === 'number')

if (numbersOnly.length===0){
  return null;
}
// if the arraylength is even, it will return the average of the two middle numbers
else if(numbersOnly.length%2===0){
numbersOnly.sort((a, b) => a - b);
  const middleIndex = Math.floor(numbersOnly.length / 2);
  const median =  (numbersOnly[middleIndex] + numbersOnly[middleIndex - 1]) / 2;
  return median;

}


else if (numbersOnly.length%2===1){
  //if the a-b is negative, it means a is smaller than b, so it will be sorted to the left of b 
  numbersOnly.sort((a, b) => a - b);
  const middleIndex = Math.floor(numbersOnly.length / 2);
  const median = numbersOnly[middleIndex];
  return median;
}
}
module.exports = calculateMedian;
