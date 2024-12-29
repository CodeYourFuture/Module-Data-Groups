function tally(arr) {
    // 〰️ Check if input is an array
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array")
    }

    // 〰️ Create an empty object to store counts 
    let counts = {};

    // 〰️ Loop through the array and count items 
    for (let item of arr) {
        if (counts[item]) {
            counts[item] += 1; // 〰️ Increase count if item exists
        } else {
            counts[item] = 1; // 〰️ Initialize count if item is new
        }
    }

    return counts; // 〰️ Return the final counts object 
}

console.log(tally(['a']));
console.log(tally(['a', 'a', 'a']));
console.log(tally(['a', 'a', 'b', 'c']));
console.log(tally([]));
// console.log(tally('a'));

module.exports = tally;
