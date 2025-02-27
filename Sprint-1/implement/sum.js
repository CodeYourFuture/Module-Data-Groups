function sum(elements) {
    let total = 0
        for (let i = 0; i < elements.length; i++) {
            if (isNaN(elements[i]) == true) {
                continue
            }
            total+=elements[i]
        }
    return total
}

module.exports = sum;
