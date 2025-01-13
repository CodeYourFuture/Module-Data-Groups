function tally(items) {
    if(!Array.isArray(items)){
        throw new Error("Input must be an array")
    }
   
    return items.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1; // Increment count or initialize to 1
        return acc;
      }, {}); // Initialize accumulator as an empty object

}

console.log("items", tally(['a', 'a', 'a', 'b']))

module.exports = tally;
