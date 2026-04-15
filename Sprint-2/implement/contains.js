function contains(object, key) {
  for (const item in object){
    if(item === key){
        return true;
  }else {
    return false;
  }
}
}

module.exports = contains;
