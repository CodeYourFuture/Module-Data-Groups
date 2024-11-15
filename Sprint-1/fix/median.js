// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory
// 1,2,3,4
// 123456789
function calculateMedian(list) {
  let median ;
  let middleF ;
  let middleC ;
  if(list.length % 2 == 0){
    middleF = Math.floor(list.length / 2);
    middleC = list[middleF];
    median = (middleC + middleF) /2;
  }
  else{
    median = list[Math.floor(list.length / 2)];

    // median = list.splice(middleF, 1)[0];
    }
  return median;
} 

module.exports = calculateMedian;
