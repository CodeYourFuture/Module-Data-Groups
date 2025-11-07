module.exports = dedupe;


function dedupe(arr) {
  // If the array is empty, return empty array
  if (arr.length === 0) {
    return [];
  }

  // We'll store unique items here
  const uniqueItems = [];

  // Look at each item in the array
  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];

    // If we haven't seen this item before...
    if (!uniqueItems.includes(currentItem)) {
      // ...then add it to our unique list
      uniqueItems.push(currentItem);
    }
  }

  // Return the list without duplicates
  return uniqueItems;
};
