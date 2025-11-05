function dedupe(arrayInput) {
   if (!Array.isArray(arrayInput)) {
    throw new TypeError("Input must be an array");
   }

   if (arrayInput.length === 0) {
    return [];
   }
}

console.log(dedupe("food"));

module.exports = dedupe;