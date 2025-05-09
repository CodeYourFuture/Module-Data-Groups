function contains(object, key) {
    // Check if the input is a valid object and not null or an array
    if (typeof object !== "object" || object === null || Array.isArray(object)) {
         throw new Error("Invalid input: Expected a non-null object.");
    }
    //The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property 
     return object.hasOwnProperty(key);
}

console.assert(contains({name:"julie", city:"bristol"}, "city") === true)

module.exports = contains;
