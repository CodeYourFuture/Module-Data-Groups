// function contains(obj, x) {
//     for (const key in obj) {
//         if (key == x) {
//             return true
//         }
//     }
//     return false
// }

function contains(obj, x) {
    if (
        typeof obj !== "object" ||
        obj === null ||
        Array.isArray(obj)
    ) {
        return false;
    }

    return Object.prototype.hasOwnProperty.call(obj, x);
}

module.exports = contains;

// Object.hasOwn(obj, key)
// This ensures the property belongs directly to the object, not its prototype.