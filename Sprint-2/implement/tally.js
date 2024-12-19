function tally(items) {
    const frequencies = {};

    for(let item of items){
        frequencies[item] = (frequencies[item] || 0) + 1;
    }
    return frequencies;
}

module.exports = tally;
console.log(tally(['a', 'a', 'a']));