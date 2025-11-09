function findMax(elements) {
    console.log("findMax called with:", elements);
  if (Array.isArray(elements)) {
    return Math.max(...elements);
  }  else {
       throw new TypeError("Input must be an array");
   }
}


module.exports = findMax;
