function findMax(elements) {
    let max = -Infinity; // any number > -infinity (even -numbers)
    // if the array empty || no numbers => -infinity

    for (let i of elements){
      if (typeof i === "number" && i > max) {
        max = i;
      } // for...of to go through each i in the array
      // using typeof to ensure only numerical values are considered
      // update max if i > current value
      // 
    }

    return max;
}

module.exports = findMax;
