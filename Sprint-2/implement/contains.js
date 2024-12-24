function contains(object,property) {
    if (object && typeof object == "object") {
        for (let key in object) {
            if (key === property) return true;
        }
    }
    return false
}

module.exports = contains;
