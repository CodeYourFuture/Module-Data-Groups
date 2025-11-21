function findMax(elements) {
    if (!Array.isArray(elements)) return -Infinity;

    const numbers = elements.filter(x => typeof x ==="number");
    if (numbers.length === 0) return -Infinity;
  
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) max = numbers[i];
    }
  
    return max;
  }

  console.log(findMax([10, 5, 30, 2])); 
   console.log(findMax(['a', 10, 5]));
    console.log(findMax([]));

module.exports = findMax;
