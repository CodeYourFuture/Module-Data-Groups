/*
function contains() {}

module.exports = contains;
*/

function contains(obj, propName) {
    if (
        typeof obj !== 'object' ||
        obj === null ||
        (typeof propName !== 'string' && typeof propName !== 'number' && typeof propName !== 'symbol')
    ) {
        return false;
    }
    return propName in obj;
}

module.exports = contains;

