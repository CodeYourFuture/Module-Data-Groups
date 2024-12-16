function contains(obj, key) {
    // 〰️ Checking if the input is a valid object or not null or an array
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return false;
    }
    // 〰️ Using hasOwnProperty to check if the key exists directly on the object
    return obj.hasOwnProperty(key);    
}

console.log(contains({a: 1, b: 2}, 'a')); 
console.log(contains({ name: "Ali", age: 25 }, 'age'));
console.log(contains({ x: 10, y: 20 }, 'y')); 

console.log(contains({a: 1, b: 2}, 'c'));
console.log(contains({}, 'a')); 



module.exports = contains;
