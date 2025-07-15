function tally(arrayElements) {
    const tallyObject = {}
    for (const item of arrayElements) {
        if (tallyObject[item]) {
            tallyObject[item] += 1;
        }
        else {
            tallyObject[item] = 1;
        }
    }
    return tallyObject;
}

console.log(tally(['a', 'a', 'b', 'a']))
module.exports = tally;

