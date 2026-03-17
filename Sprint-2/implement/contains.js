function contains(obj, prop) {
  if (obj === null) {
    return false;
  }

  if (typeof obj !== "object") {
    return false;
  }

  if (Array.isArray(obj)) {
    return false;
  }

  if (prop in obj) {
    return true;
  } else {
    return false;
  }
}

module.exports = contains;
