function findMax(elements) {
    console.log(elements.filter((num) => typeof num === 'number'))
    elements.filter((num) => typeof num === 'number') == '[]'
    if (elements.filter((num) => typeof num === 'number') == '[]') {
        return "Enter valid numbers"
    } else {
        let filteredByNumber = elements.filter((num) => typeof num === 'number')
        return Math.max(...filteredByNumber)
    }
}

module.exports = findMax;
