function calculateMedian(list) {
  // Sort the list to make sure the elements are in ascending order
  list.sort((a, b) => a - b);

  const middleIndex = Math.floor(list.length / 2);

  // If the list length is odd, return the middle value
  if (list.length % 2 !== 0) {
    return list[middleIndex];
  }

  // If the list length is even, return the average of the two middle values
  const leftMiddle = list[middleIndex - 1];
  const rightMiddle = list[middleIndex];
  return (leftMiddle + rightMiddle) / 2;
}

module.exports = calculateMedian;
