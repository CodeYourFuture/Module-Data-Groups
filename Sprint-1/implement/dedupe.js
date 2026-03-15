function dedupe(arr) {
  if (arr.length === 0) {
    //checks if array is empty
    return arr;
  };
  const newArray = []; // to store the new values after checking and deduplicating
  for (let i = 0; i < arr.length; i++) {
    // checks every item in array for dupes
    if (!newArray.includes(arr[i])) {
      //checks if new item is already in newArray
      newArray.push(arr[i]); // adds new item !in newArray and appends it
    }
  };
  return newArray; // returns new array without duplicates/empty
};

console.log(dedupe([])); // prints: []
console.log(dedupe([1, 2, 3])); // prints: [ 1, 2, 3 ]
console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8])); // prints: [ 5, 1, 2, 3, 8 ]
console.log(dedupe(["a", "a", "a", "b", "b", "c"])); // prints: [ 'a', 'b', 'c' ]

module.exports = dedupe;
