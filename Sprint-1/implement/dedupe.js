function dedupe(arr){
  // I am using a "Set" here to keep track of items we've already seen.
 const seen = new Set();

  // This part goes through each item in the array and checks if it's already in the "Set."
 return arr.filter((item) => {
  if (!seen.has(item)){ // If it's not in the "Set," it means we haven't seen it before.
    seen.add(item);  // Add it to the "Set" so we remember it for the next time.
    return true; // Keep this item in the filtered array because it's unique.

  }
    return false; // If it's already in the "Set," skip it (we don't want duplicates).
 })

}
console.log(dedupe([]));
module.exports = dedupe;
