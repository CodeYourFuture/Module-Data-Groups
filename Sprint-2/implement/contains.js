function contains(object, searchKey) {

    if(typeof searchKey != 'string' && typeof searchKey != 'symbol') {
        // throw new Error(`Please enter a valid property to search for.`)
        return false;
    };

    return object.hasOwnProperty(searchKey);
    /* ChatGPT told me about potential problems using .hasOwnProperty, but I don't fully understand the fix it was suggesting yet, 
     -- object.hasOwnProperty.call(obj, searchKey) --
    so I'll pin that thought and come back to it later */
}

module.exports = contains;
