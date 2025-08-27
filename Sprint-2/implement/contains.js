function contains(object, keyName) {
    if (Object.keys(object) == 0 || !Object.keys(object).includes(keyName) || typeof object !== "object") {
        return false
    }
    else if (Object.keys(object).includes(keyName)) {
        return true
    }
};



module.exports = contains;
