function dedupe(array) {
    let arr = array.filter((item, index) => {

        // indexOf() returns the first index where that value appears in the array.
        if (array.indexOf(item) === index) {
            return item;
        }
    })

    return arr;
}

module.exports = dedupe;