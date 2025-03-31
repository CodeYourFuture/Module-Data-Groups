const contains = (object, prop) => {
    // check if the object is empty
    const isEmpty = (object) => { 
        return Object.keys(object).length === 0; 
    }

    if (isEmpty(object)) {
        return false;
    }

    if (object.hasOwnProperty(prop)) {
        return true; 
    } else {
        return false;
    }
};


module.exports = contains;
