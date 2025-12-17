function contains(checkObj, checkProp) {
  if (
    typeof checkObj === "object" &&
    checkObj !== null &&
    !Array.isArray(checkObj)
  ) {
    if (Object.hasOwn(checkObj, checkProp)) {
      return true;
    } else {
      return false;
    }
  } else {
    throw new Error("error invalid parameter please provide an object");
  }
}

module.exports = contains;
