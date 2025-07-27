function contains(list, prop) {
  return (
    typeof list === "object" &&
    !Array.isArray(list) &&
    list[prop] != null
  );
}

module.exports = contains;