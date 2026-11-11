function checkIfObj(objToCheck) {
  if (
    typeof objToCheck !== "object" ||
    objToCheck === null ||
    Array.isArray(objToCheck)
  ) {
    throw new Error("contains requires an object");
  }
}

function contains(objToCheck, keyToSearch) {
  checkIfObj(objToCheck);
  return Object.hasOwn(objToCheck, keyToSearch);
}

module.exports = contains;
