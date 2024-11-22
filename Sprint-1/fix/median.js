// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory
// 1,2,3,4
// 123456789
function calculateMedian(list) {
  list.sort();
  let median ;
  if(list.length % 2 == 0){
    median = (list[Math.floor(list.length / 2 -1)] + list[Math.floor(list.length / 2)] ) /2;
  }
  else{
    median = list[Math.floor(list.length / 2)];
    }
  return median;
} 


module.exports = calculateMedian;
