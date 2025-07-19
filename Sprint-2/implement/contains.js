const containObject = {
first_name : 'john',
surname: 'madim',
date_of_birth : 1986,
place_of_birth : 'newYork'
}

function contains(obj,propertyName) {
        if ( typeof obj !== 'object'|| obj === null || Array.isArray(obj)){
        throw new Error ('Invalid first argument parameter, need to be an object.')
    }
    if (Object.keys(obj).length ===0){
        return false
    }

    const keyObject = Object.keys(obj)
    const hasPropertyName = keyObject.includes(propertyName)
    return hasPropertyName
    
}



module.exports = contains;
