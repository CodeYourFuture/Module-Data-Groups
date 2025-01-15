function contains(object, propertyName) {
   return Object.hasOwn(object, propertyName);

}

const book = {a: 1, b: 2}
console.log(contains(book, "a"));

module.exports = contains;
