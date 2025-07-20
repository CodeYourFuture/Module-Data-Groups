// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory.

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  //it checks if the parameter is an array, if not returns null
  if (!Array.isArray(list)) return null;
  //makes a copy of the parameter so the parameter  doesnt get modified while we work with it,and its sorting it ascending
  //const copy=[...list].sort((a,b)=> a-b);
  
  
  //filter out non-numeric and sort remaining numbers
  const filteredNumbers=list.filter(item=>typeof item==="number").sort((a,b)=>a-b);
  // if there is no number in the array it returns null
  if (filteredNumbers.length === 0) {
    return null;
  }
   // gets the middle of filteredNumbers
   const middleNumber = Math.floor(filteredNumbers.length / 2);
   //calculates the median if filteredNumbers is even
   if(filteredNumbers.length%2===0){
    return (filteredNumbers[middleNumber-1]+filteredNumbers[middleNumber])/2;
  } else{                                                                       //if it is odd
    return filteredNumbers[middleNumber];
  }
  

  return median;
}

module.exports = calculateMedian;
