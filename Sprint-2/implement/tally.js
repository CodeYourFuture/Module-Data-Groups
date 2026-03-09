function tally(arr) {
    if (Array.isArray(arr)) {

        let countObj = {};
    
        for (const item of arr) {
    
            if (countObj[item]) {
                countObj[item] = countObj[item] + 1;
            } else {
                countObj[item] = 1;
            }
        }
        
        return countObj;
    }

    else throw new Error("");
}

module.exports = tally;

// console.log(tally(['a', 'a', 'a', 'a', 'a', 'b', 'c']));


// tally(['a', 'a', 'a', 'a', 'a', 'b', 'c']), target output: { a : 5, b: 1, c: 1 }