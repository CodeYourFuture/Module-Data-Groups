// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  if(list.length===0)
    return null;
  sortList(list);
  let median;
  if(list.length%2===1){
  const middleIndex = Math.floor(list.length / 2);
  //median = list.splice(middleIndex, 1)[0];
  median=list[middleIndex];
}
  else 
  {
    const middleIndex = list.length / 2;
    median = (list[middleIndex - 1] + list[middleIndex]) / 2;
  }


  return median;
}

function sortList(list){
   for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
}

module.exports = calculateMedian;
