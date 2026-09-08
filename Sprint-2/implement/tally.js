// Explanation:
// Walk the list once, keeping a count for each item in an object. If the item
// is already a key, add one, otherwise start it at one.
// A reduce-based answer is also fine, but for...of is what trainees have met
// in the curriculum at this point.

function tally(list) {
  if (!Array.isArray(list)) {
    throw new Error("tally requires an array");
  }

  const counts = {};
  for (const item of list) {
    if (item in counts) {
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
  }

  return counts;
}

module.exports = tally;
