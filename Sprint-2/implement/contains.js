function contains(checkObj, checkProp) {
  if (
    typeof checkObj === "object" &&
    checkObj !== null &&
    !Array.isArray(checkObj)
  ) {
    const checkKeys = Object.keys(checkObj);
    let isProperty = false;

    if (checkKeys.length === 0) {
      return false;
    }

    if (Object.hasOwn(checkObj, checkProp)) {
      return true;
    } else {
      for (let key of checkKeys) {
        if (key === checkProp) {
          isProperty = true;
        }
      }

      if (isProperty === false) {
        return false;
      }
    }
  } else {
    throw new Error("error invalid parameter please provide an object");
  }
}

contains({ d: "me" }, 4);

module.exports = contains;
