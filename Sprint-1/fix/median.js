// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

//function calculateMedian(list) {
  //const middleIndex = Math.floor(list.length / 2);
  //const median = list.splice(middleIndex, 1)[0];
  //return median;
//}

function calculateMedian(list) {

  if(!Array.isArray(list)) return null;

  const nums = list.filter(x => typeof x ==="number");

  if(nums.length ===0) return null;

  nums.sort((a, b) => a - b);

  const mid = Math.floor(nums.length / 2);

  if (nums.length % 2 ===1){

    return nums[mid];
  }
  else{
    return (nums[mid - 1] + nums[mid]) / 2; 
  }
}

module.exports = calculateMedian;
