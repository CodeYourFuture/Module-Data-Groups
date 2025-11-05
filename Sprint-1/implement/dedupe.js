function dedupe(arrayInput) {
   if (!Array.isArray(arrayInput)) {
    throw new TypeError("Input must be an array");
   }
}

console.log(dedupe("food"));

module.exports = dedupe;