function contains(someObject, propertyName) {
  let whatTheRobotFound = someObject[propertyName];
  if (someObject[propertyName] === undefined) {
    return false;
  } else {
    return true;
  }
}

module.exports = contains;

