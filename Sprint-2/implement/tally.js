


//Tally ake a list of items and count the frequency of each item
// in an array
// it should return an object containing the count for each unique item
//tally(['a', 'a', 'b', 'c']), target output: { a : 2, b: 1, c: 1 }

const countUnique = ["a", "a", "b", "c"];

function tally(items) {
  const counts = {}; // Initialize an empty object to store counts
  
  // Check if the input array is empty
  if (items.length === 0) {
    return counts; // Return an empty object if the array is empty
  }

  // Loop through each item in the array
  items.forEach((item) => {
    if (counts[item]) {
      // If the item is already in the object, increment its count
      counts[item]++;
    } else {
      // Otherwise, initialize its count to 1
      counts[item] = 1;
    }
  });

  return counts; // Return the object with the counts
}

const result = tally(['a', 'a', 'b', 'c']);
console.log(result); 

//{ a: 2, b: 1, c: 1 }

module.exports = tally;
