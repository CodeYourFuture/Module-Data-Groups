function tally(items) {
    const frequencies = {};

    if (typeof items === "string" || !Array.isArray(items)) {
        throw new Error("Invalid input");
    }

    for(let item of items){
        frequencies[item] = (frequencies[item] || 0) + 1;
    }
    return frequencies;
}

module.exports = tally;
console.log(tally(['a', 'b', 'c', 'd']));