//function dedupe(list) {

  //  for (let i = 0; i < list.length; i++) {
  //      for (let j = i + 1; j < list.length; j++) {
  //         if (list[i] === list[j]) {
  //           list.splice(j, 1);
  //              j--; // Adjust index after removal
  //         }
  //      }
  //  }
  //  return list;
  //}

//Notes / Limitations:
//Time complexity is O(n²): Inefficient for large arrays.
//Mutates the input array: If you need to preserve the original, you'll need to copy it first.


function dedupe(list) {
    return [...new Set(list)];
  }

console.log(dedupe([1, 2, 3, 4, 5, 1, 2, 3])); // [1, 2, 3, 4, 5]
console.log(dedupe([1, 1, 1, 1, 1])); // [1]
console.log(dedupe([])); // []
console.log(dedupe([1, 'a', 2, 'b', 1, 'a'])); // [1, 'a', 2, 'b']
console.log(dedupe([1, 2, 3, 4, 5, 1, 2, 3])); // [1, 2, 3
module.exports = dedupe;