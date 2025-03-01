const ihorInfo = {
  name: `Ihor`,
  surname: `Bolzhelarskyi`,
  age: 29,
  address: `Cambridge`,
};

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

console.log(contains(ihorInfo, `name`));
module.exports = contains;
