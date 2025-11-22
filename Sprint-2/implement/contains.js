function contains(obj, find) {
  if (obj.hasOwnProperty(find)) return true;
  return false;
}

//console.log(contains({a: 1, b: 2}, 'toString'));
module.exports = contains;
