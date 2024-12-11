function dedupe(list) {
    // return [] if list is empty array.
    if (list.length === 0) {
        return [];
    }
    // declare empty array to push unique value
    let uniqueList = [];
    // use filter method to push only unique values to the uniqueList
    return list.filter((item) => {
        if (uniqueList.includes(item)) {
            return false;
        }
        uniqueList.push(item);
        return true;
    });
}

console.log(dedupe([2, 5, 1, 6, 9]));

module.exports = dedupe;
