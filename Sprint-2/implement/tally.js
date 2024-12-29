function tally(arr) {
    let counter = {};

    for (const el of arr) {
        if (el in counter) {
            counter[el] += 1 
        } else {
            counter[el] = 1
        }
    }
    return counter
}


module.exports = tally;
