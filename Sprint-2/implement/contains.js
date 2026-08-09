function contains(obj, prop) {
    const notArray = !Array.isArray(obj);
    if (obj === null || Array.isArray(obj) || obj === Number || obj === undefined) {
        return false; 
    }  
  return obj.hasOwnProperty(prop);
}
