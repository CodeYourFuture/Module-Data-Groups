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

    if a key already exists on queryParams, but is not an array, then create an array
    and store the the old value and new value in the array
    */
    if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
      if (queryParams[key] === value || queryParams[key].includes(value))
        continue;
      if (!Array.isArray(queryParams[key])) {
        queryParams[key] = [queryParams[key]];
      }
      queryParams[key].push(value);
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
