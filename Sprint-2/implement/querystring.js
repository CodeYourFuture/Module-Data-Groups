function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString || typeof queryString !== "string") return queryParams;

  if (queryString.trim() === "") return queryParams;

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const firstEqualsIndex = pair.indexOf("=");
    let key, value;

    // Checks for pairs with key but no value like debug&verbose&name=Alice
    // by keeping them, prevent loss of information
    if (firstEqualsIndex === -1) {
      key = pair.trim();
      value = "";
    } else {
      // splits on first equal, but not any of the rest
      key = pair.slice(0, firstEqualsIndex).trim();
      value = pair.slice(firstEqualsIndex + 1).trim();
    }

    // skips next part if the ends up being an empty str after slice and trim
    if (!key) continue;

    /* use hasOwnProperty to prevent conflict with built-in/inherited properties
    like "toString", if the query string has a "toString=value".



    if a kv pair already exists on queryParams, and value is the same as the incoming value, ignore. It's a duplicate
    Otherwise, if it has a single value, change value to array containing the old value and new value.

    if value at key is an array, and contains the incoming value, ignore. Else, push it to the array.
    */
    if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
      if (!Array.isArray(queryParams[key])) {
        if (queryParams[key] === value) continue;
        queryParams[key] = [queryParams[key], value];
      } else {
        if (queryParams[key].includes(value)) continue;
        queryParams[key].push(value);
      }
    } else {
      queryParams[key] = value; // ← new key, just assign
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
