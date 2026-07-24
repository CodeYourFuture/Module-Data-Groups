
function contains(obj, target) {
      for (const key in obj) {
        if (key === target) return true;
      }
      return false;
    }


module.exports = contains;
