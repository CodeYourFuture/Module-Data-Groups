function dedupe(arr) {
    let newArr = new Set(arr);
    return Array.from(newArr)
}


module.exports = dedupe;