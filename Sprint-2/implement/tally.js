function tally(array) {
    if (!Array.isArray(array)){
        throw new Error('tally requires an array')
    }
    const result = {};
    for (const item of array){
        if (Object.hasOwn(result, item)) {
            result[item] = result[item] + 1
        } else {
            result[item] = 1
        }
    }
    return result
}

module.exports = tally;
