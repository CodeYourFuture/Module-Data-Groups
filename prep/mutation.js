// mutation(change)
// calculate median
// mutating:  for arrays, mutation means changing the contents of an array. This could means changing a value at some index
// or removing an item all together.
// when we call splice it does two things: 
//1- removes the specified item from the list.
//2- returns the remove item.

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];

  return median;
}
