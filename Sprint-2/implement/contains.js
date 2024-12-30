function contains(object,target) {
    if (typeof object !== 'object' || object === null){
            return false
        }
        return target in object
}

module.exports = contains;
