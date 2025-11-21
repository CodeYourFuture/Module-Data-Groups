function contains(obj, prop) {
    if (!obj || typeof obj !== "object" || Array.isArray(obj)){

        return false;

      }
}

if (obj.hasOwnProperty(prop)){

    return true;

  } 
  else{
    
    return false;
  }


module.exports = contains;