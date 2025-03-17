function calculateMedian(list) {

  if (list.length % 2 === 0) {
    const middleIndex1 = list.length / 2 -1;
    const middleIndex2 = list.length / 2;
    const median = parseFloat((list[middleIndex1] + list[middleIndex2]) / 2);
    return median;
  } 
  
  else {
    const middleIndex = Math.floor(list.length / 2);
    const median = parseFloat(list.slice(middleIndex, (middleIndex+1)));
    return median;
  }
  }
  module.exports=calculateMedian;