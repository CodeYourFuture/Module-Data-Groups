function contains() {
function contains(obj, key) {
        if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
            return false; // Return false for invalid parameters like arrays or null
        }
        return obj.hasOwnProperty(key); // Use hasOwnProperty to check for the key
    }
module.exports = contains;
