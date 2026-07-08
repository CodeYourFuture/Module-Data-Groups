/*
 notes:

 - One-line summary: return a new array with duplicates removed, preserving
   the order of first occurrences.
 - Input handling: null or undefined -> return [], any other non-array -> throw.
 - Key idea: use a Set to track values we've seen; push unseen items to result.

 Quick checks:
 1) If nothing changes, test with: node -e "console.log(require('./implement/dedupe')([1,1,2]))"
 2) If order looks wrong, remember we preserve first occurrences.
 3) If unexpected equality (objects), remember objects are compared by reference.

 Tiny TODOs (one small step each):
 - [ ] Consider accepting array-like objects? (optional)
 - [ ] Decide whether to treat non-array values consistently (return [] vs throw)

 Short examples:
 dedupe([1,2,1]) -> [1,2]
 dedupe(null) -> []
 dedupe([{a:1},{a:1}]) -> [{a:1},{a:1}]  // different refs stay, not deduped by shape

 Implementation (no behavior changes below):
*/

function dedupe(arr) {
    // Quick guard: treat null/undefined as empty lists — doesn't throw, just returns []
    if (arr === null || arr === undefined) {
        return [];
    }

    // If it's not an array, fail fast — makes bugs obvious (helps debugging)
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array");
    }

    // seen: keep track of values we've already added (O(1) lookup)
    const seen = new Set();
    // result: build new array, preserve first-seen order
    const result = [];

    // iterate in order; if unseen -> keep it
    for (const item of arr) {
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }

    // return the deduped array
    return result;
}

module.exports = dedupe;



