// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

//In order to fix this we need to ensure 
// (1) only an array is passed
// (2) we filter only valid numbers within the passed array and 
// (3) return null if there are no valid numbers.
// filter 

function calculateMedian(list) {
  if (!Array.isArray(list)) return null;
  const nums = list.filter(x => typeof x === 'number' && !isNaN(x));
  if (nums.length === 0) return null;

  const sorted = [...nums].sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);
  let median;
  if (sorted.length % 2 !== 0) {
    median = sorted.slice(middleIndex, middleIndex + 1)[0];
    return median;
  }
  else { const mid = sorted.slice(middleIndex - 1, middleIndex + 1);  //you are declaring and assigning at the same time
    median = (mid[0] + mid [1])/2;
    return median;
  }
}

module.exports = calculateMedian;

/*   const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median; */