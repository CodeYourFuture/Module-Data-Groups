function tally(items) {

    if (!Array.isArray(items)){
        throw new Error("tally requires an array");
    }

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

module.exports = tally;
