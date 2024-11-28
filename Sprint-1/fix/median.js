function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) {
    throw new Error("Input must be a non-empty array.");
  }

  const sortedList = [...list].sort((a, b) => a - b); 
  const middleIndex = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 === 0) {
   
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;