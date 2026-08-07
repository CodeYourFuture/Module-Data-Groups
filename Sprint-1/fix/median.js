// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

/*function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
}*/
function calculateMedian(list){
  if(!Array.isArray(list)){
    return null;
  }
  const num = [];
  for(let i = 0; i < list.length ; i++){
    if (typeof list[i] === "number"){
      num.push(list[i]);
    }
  }
  if (num.length === 0){
    return null;
  }
  num.sort((a, b) => a - b);
  const middleIndex = Math.floor(num.length / 2);
  if (num.length % 2 === 1){
    return num[middleIndex];
  }
  return (num[middleIndex-1] + num[middleIndex])/2;
}
module.exports = calculateMedian;
