function tally(items) {
    if (!Array.isArray(items)){
        throw new TypeError('that aint no array bay bay'); //okay so this is the biggie smalls and its working
    }
    const counts = {};

    for (const item of items){
        counts[item] = (counts[item] || 0) +1; //simple beautiful core logic
    }
    return counts;
}

module.exports = tally;
