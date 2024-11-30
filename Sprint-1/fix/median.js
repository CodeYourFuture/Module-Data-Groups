// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  
  //here this will work for odd length only.so I have to add a condition for even too
  const middleIndex = Math.floor(list.length / 2);
  const firstMiddle = list[middleIndex - 1];
  const secondMiddle = list[middleIndex];
  if(list.length % 2=== 0){
    const median = (firstMiddle + secondMiddle)/2;
    return median;   
  }
  else{
       const median = list[middleIndex];
       return median;

  } 
}

module.exports = calculateMedian;
