// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {

  
  
  list.sort(); // sort the list in ascending order
  
  const middleIndex = Math.floor(list.length / 2); // find the middle index
  //const median = list.splice(middleIndex, 1)[0]; // remove the middle element

if (list.length % 2 !== 0) {
  return list[middleIndex]; // return the middle element if the list length is odd
}
  const median = (list[middleIndex -1] + list[middleIndex]) / 2; // return the average of the two middle elements if the list length is even
  return median;  // 
} 


 





module.exports = calculateMedian;
