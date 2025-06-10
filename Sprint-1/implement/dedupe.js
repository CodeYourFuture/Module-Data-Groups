function dedupe(array) {
    const nonDuplicate   = new Set(array)
    return [...nonDuplicate]

}
//console.log(dedupe([]))
module.exports = dedupe;
