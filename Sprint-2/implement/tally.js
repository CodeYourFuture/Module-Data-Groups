
//tally takes a list of items and count the frequency of each item in an array
function tally(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input needs to be an array");
    }

    if (arr.length === 0) {
        return {};
    }

    const frequency = {};

    for (const item of arr) {
        if (frequency[item]) {
            frequency[item] += 1;
        } else {
            frequency[item] = 1;
        }
    }

    return frequency;
}


books = ["a", "b", "c", "a"]; 
books2 = []
console.log(tally(books)); 



module.exports = tally;
