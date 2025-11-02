function contains(obj, prop) {
    if(arguments.length !== 2){
        throw new Error('Invalid input: function requires two arguments');
    }
    if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
        throw new Error('Invalid input: first argument must be an object');
    }
    return obj.hasOwnProperty(prop);

}

module.exports = contains;
