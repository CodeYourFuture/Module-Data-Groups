function tally(list) {
    if (!Array.isArray(list)) {
        throw new Error("Invalid input!");
    }
    return list.reduce((rep, element) => {
        rep[element] = (rep[element] || 0) + 1;
        return rep;
    }, {});
}

module.exports = tally;
