function dedupe(arr) {
    // 〰️ If the input is not an array, throw an error
    if (!Array.isArray(arr)) {
        throw new TypeError("Input should be an array");
    }

    // 〰️ Create a new array to hold the deduplicated values
    let result = [];

    // 〰️ Loop through the input array
    for (let i =0; i < arr.length; i++) {
        // 〰️ If the element is not already in the result array, add it
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }

    // 〰️ Return the deduplicated array
    return result;
}

console.log(dedupe([1, 2, 1])); 
console.log(dedupe(['a', 'a', 'b', 'c', 'c'])); 
console.log(dedupe([1, 2, 3])); 
console.log(dedupe(['a', 'b', 'c']));
console.log(dedupe([1, "1", 1, "1"]));
//console.log(dedupe("string"));

module.exports = dedupe;