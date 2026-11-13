function tally(items) {
    const tallyObj = {};

    for (const item of items){
        if (!(item in tallyObj)){
            tallyObj[item] = 1;
        } else {
            tallyObj[item]++;
        }
    }

    return tallyObj;
}

tally(["a"]);

module.exports = tally;
