/*function contains(obj, key) {
        if (typeof obj !== 'object' || obj === null) {
    return false; 
}
return Object.prototype.hasOwnProperty.call(obj, key);
    }
    
    console.log(contains({a: 1, b: 2}, 'a')); 
    console.log(contains({a: 1, b: 2}, 'c')); 
    console.log(contains({}, 'a')); */
    function contains(obj, key) {
        if(typeof obj !== 'object' || obj === null || Array.isArray(obj)){
            return false;
        }
        // return obj != null && key in obj;
        return Object.hasOwn(obj, key);
    }
    
    console.log(contains({a: 1, b: 2}, 'a')); 
    console.log(contains({a: 1, b: 2}, 'c')); 
    console.log(contains({}, 'a'));
    

module.exports = contains;
