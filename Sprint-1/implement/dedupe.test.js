const dedupe = require("./dedupe.js");

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
test("given an empty array, it returns an empty array", () => {
    expect(dedupe([])).toEqual([]);
});

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array
test("given an array with no duplicates, it returns a copy of the original array", () => {
    const arr1 = [1, 2, 3, 4, 5];
    expect(dedupe(arr1)).toEqual([1, 2, 3, 4, 5]);
    expect(dedupe(arr1)).not.toBe(arr1); // Should be a copy, not the same reference
    
    const arr2 = ['a', 'b', 'c', 'd'];
    expect(dedupe(arr2)).toEqual(['a', 'b', 'c', 'd']);
    
    const arr3 = [10, 20, 30];
    expect(dedupe(arr3)).toEqual([10, 20, 30]);
});

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurrence of each element
test("given an array with strings or numbers, it removes duplicate values, preserving the first occurrence of each element", () => {
    // String duplicates
    expect(dedupe(['a', 'a', 'a', 'b', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    
    // Number duplicates
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    
    // Mixed duplicates
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
    
    // Multiple duplicate occurrences
    expect(dedupe([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])).toEqual([1, 2, 3, 4]);
    
    // Different data types (they're distinct, so no duplicates)
    expect(dedupe([1, '1', 1, '1'])).toEqual([1, '1']);
    
    // Mixed types with duplicates within same type
    expect(dedupe(['x', 'y', 'x', 'z', 'y', 'x'])).toEqual(['x', 'y', 'z']);
    
    // Numbers in different order
    expect(dedupe([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([3, 1, 4, 5, 9, 2, 6]);
    
    // Single element array
    expect(dedupe([42])).toEqual([42]);
    expect(dedupe(['hello'])).toEqual(['hello']);
});
