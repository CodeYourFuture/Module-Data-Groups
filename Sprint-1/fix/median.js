// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const SortedList = [...list].sort ((a, b) => a-b );//the spead operator [...list] creates an copy of the input array list, it allows the original array not to be modified
  // .sort((a,b) => a-b) method sorts the array in ascending order. the comparison a-b permits numerial sorting, let say const sortedList =[5,1,3], sortedList.sort((a,b) => a-b); [1,3,5]
  const middleIndex = Math.floor(SortedList.length/2);// sortedList.length gives the number of elements in the array. By dividing the length by 2 and using math.floor(round down to the closest integer) we get an integer part, this also allows to find the middle element const SortedList = [1,3,5], const middleIndex = Math.floor(3/2);
  if (SortedList.length % 2 !==0){ // allows to test if the array's length is ood and return the middle element, the remainder of division by 2 is not a zero and for odd length arrays, the median is the element at middleIndex
    return SortedList[middleIndex];
  } else {
    return (SortedList[middleIndex -1]) + (SortedList[middleIndex]) / 2;// if the array is even, the return will be calculated for the average of two middle elements. middleIndex -1, the index of the first middle element, middleIndex is the index of the second middle element. add the two middle elements and divide by 2, like that const sortedList = [1,2,3,4] const firstMiddle = sortedList[1]-> is 2, const secondMiddle = sortedList [2]->3, return (2+3) /2 ->2.5
  }
}

module.exports = calculateMedian;
