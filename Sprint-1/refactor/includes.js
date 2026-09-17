// Refactor the implementation of includes to use a for...of loop

// Explanation:
// The for loop works, but its index is only used to read list[index], never
// returned or compared, so for...of is the better choice. Behaviour stays the
// same: true if target is found, false if not.
// Watch for answers that call list.includes() or list.indexOf(), which skip
// the exercise.

function includes(list, target) {
  for (const element of list) {
    if (element === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
