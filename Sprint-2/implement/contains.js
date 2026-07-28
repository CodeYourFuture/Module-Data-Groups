function contains(keyInput,valueInput) {
    if (Array.isArray(keyInput) == true) {
    return false;
  } else {
    for (const key in keyInput) {
      if (key == valueInput) {
        return true;
      }
    }
  }
  return false;
}

}

module.exports = contains;
