function tally(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("The input should be an array!");
    }
        
    const countObj = Object.create(null);

    for (const item of arr) {

        if (countObj[item]) {
            countObj[item] = countObj[item] + 1;
        } else {
            countObj[item] = 1;
        }
    }
    
    return countObj;
}

module.exports = tally;

// console.log(tally(['a', 'a', 'a', 'a', 'a', 'b', 'c']));


// tally(['a', 'a', 'a', 'a', 'a', 'b', 'c']), target output: { a : 5, b: 1, c: 1 }