function dedupe(arr) {
    const deduplicatedArray = arr.filter((item, index) => arr.indexOf(item) === index);
    return deduplicatedArray;
}
 
module.exports = dedupe;