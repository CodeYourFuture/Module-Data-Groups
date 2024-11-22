function tally(list) {
    if (!Array.isArray(list)) {
      throw new Error("Input must be an array");
    }
  
    const count = {};
  
    list.forEach((item) => {
      count[item] = (count[item] || 0) + 1;
    });
  
    return count;
  }
  console.log(tally(["a", "a", "b", "c"]));
  module.exports = tally;
  