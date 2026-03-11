function createLookup() {
  // implementation here
const lookup = {};

lookup.add = function(key, value) {
  lookup[key] = value;
};  

}

module.exports = createLookup;
