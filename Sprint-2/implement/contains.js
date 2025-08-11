function contains(mainObject, char) {
  if (Object.keys(mainObject).length === 0 || typeof mainObject !== "object") {
    return false; // Handle invalid or empty input early
  }

  for (const key of Object.keys(mainObject)) {
    if (key === char) {
      return true; // Return true as soon as a match is found
    }
  }

  return false; // Return false if no match is found after checking all keys
}


//console.log(contains({a:1 , b:2},"f"));

module.exports = contains;
