function dedupe(list) {
    const newList =[...new Set (list)]
    return newList
}

module.exports = dedupe;