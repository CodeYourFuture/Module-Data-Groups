function contains(obj, property) {
 if (typeof obj ==='object' || obj === null || typeof property !== 'string') {
    return false;
 }
 return obj.hasOwnProperty(property);
}

module.exports = contains;


