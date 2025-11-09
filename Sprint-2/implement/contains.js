function contains(someObject, propertyName) {
  let whatTheRobotFound = someObject[propertyName];
  if (someObject[propertyName] === undefined) {
    return false;
  } else {
    return true;
  }
}

module.exports = contains;

// Implement a function called contains that checks an object contains a
// particular property
