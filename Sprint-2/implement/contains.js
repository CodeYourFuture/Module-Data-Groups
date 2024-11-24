function contains(obj, k) {
    if (typeof obj !== "object" || Object.keys(obj).length === 0) {
      return false;
    } else {
      for (const key of Object.keys(obj)) {
        if (key === k) {
          return true;
        }
      }
    }
    return false
}


module.exports = contains;
