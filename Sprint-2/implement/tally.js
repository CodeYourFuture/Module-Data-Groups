function tally(list) {
  //This object will store each item as a key and how many times it appears as a value. First declare an empty array
  var counts = Object.create(null);
  //validate list
  if (!Array.isArray(list)) {
    throw new Error("Input must be an array");
  }
  //for...of loop, to go through each element in list one by one.
  for (var item of list) {
    //counts[item] checks if the object already has a key named after the current item.
    if (counts[item]) {
      //If it exists, increase the count.
      counts[item] += 1;
    } else {
      // create a new key in the object and set its value to 1.
      counts[item] = 1;
    }
  }

  return counts;
}

console.log(tally(["a", "a", "c", "a", "d"]));
console.log(tally(["toString", "toString"]));
module.exports = tally;
