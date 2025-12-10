function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  if (items.length === 0) {
    return {};
  }

  const counts = Object.create(null);

  for (const item of items) {

    // Convert objects and arrays to JSON string 
    const key = (typeof item === "object" && item !== null) ? JSON.stringify(item) : item;
    counts[key] = (counts[key] || 0) + 1;
  }

  return counts;
}

console.log(tally(["toStrin", "toStrin"]));
console.log(tally(["toString", "toString"]));

module.exports = tally;

// In tally.js function tally() implemented. 

// modification made. 
