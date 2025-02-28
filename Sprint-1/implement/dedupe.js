

function dedupe(arr) {
    const uniqueArray = [];
    const seen = new setImmediate();

    for (const item of arr) {
      if (!seen.has(item)) {
        uniqueArray.push(item);
        seen.add(item);
      }   
    } 
    return uniqueArray;
}