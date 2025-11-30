function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function contains(obj, prop) {
    if(!isObject(obj)) throw  new Error ("Invalid input");
    
  return Object.keys(obj).includes(prop);
}

module.exports = contains;
