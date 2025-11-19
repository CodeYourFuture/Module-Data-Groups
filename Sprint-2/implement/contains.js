// function that checks if a given property exists in an object
function contains(obj, property) {
  // Check if the input is a valid object and not null or an array
  if (
    typeof obj === "object" &&
    obj !== null &&
    !Array.isArray(obj) &&
    property in obj
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = contains;
