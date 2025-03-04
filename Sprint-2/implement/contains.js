function contains(obj, key) {
  const modifyedObj = Object.keys(obj);
  if (modifyedObj.length < 1) {
    return false;
  }
  let check = false;
  modifyedObj.forEach((element) => {
    if (key === element) {
      check = true;
    }
  });
  return check;
}
module.exports = contains;
