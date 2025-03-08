function contains(givenObject, givenKey) {
    return Object.keys(givenObject).includes(givenKey)
}

module.exports = contains;