function contains(obj, key) {
        if (obj == null || typeof obj !== 'object' || Array.isArray(obj)) { // implented a for loop which check if obj is === null or type of object is not object or array is not object. This is to check if the object is not an array or null.
            return false; // then we return false.
            //Output: false; 
        }
        return obj.hasOwnProperty(key); // else we return true if object hasOwnProperty of key. this is to check if the object has the key input. hasOwnProperty is a method that returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
        //Output: true;
    }
    


module.exports = contains;
