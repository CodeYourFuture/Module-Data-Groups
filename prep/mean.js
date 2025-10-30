//a data structure is used to group data together. it is a collection of data which has functions which allow you to access and manipulate the data.
//an array is a zero indexed collection of data that holds data in an ordered list.
function calculateMean(list) {
  let total = 0;

  for (const item of list) {
    total += item;
  }
}

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];

  return median;
}

calculateMean([10, 20, 30, 40, 50]);
