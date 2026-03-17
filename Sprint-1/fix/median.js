// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  let newArray = [];
  if(!Array.isArray(list))
    {
      return null;
    }
   
  for (const item of list)
  {
    if (typeof item === 'number')
    {
      newArray.push(item);
    } 

  }
  if (newArray.length === 0)
  {
    return null;
  }
  newArray = newArray.sort((a, b) => a-b);
  if(newArray.length %2 === 0)
  {
     const rightIndex = newArray.length/2
     const leftIndex = rightIndex - 1;
     const median = (newArray[rightIndex] + newArray[leftIndex])/2;
     return median;

  }
  else{

    const middleIndex = Math.floor(newArray.length/2);
    return newArray[middleIndex]
  }
  //const middleIndex = Math.floor(newArray.length / 2);
  //const median = list.splice(middleIndex, 1)[0];
  //return newArray[middleIndex];
}

module.exports = calculateMedian;
