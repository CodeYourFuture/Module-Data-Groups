function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue;
    const equalIndex = pair.indexOf("=");
    if (equalIndex === -1) {
      const key = pair;
      queryParams[decodeURIComponent(key) ?? ""] = "";
      continue;
    }

    let key = pair.substring(0, equalIndex).replace("+", " ");
    let value = pair.substring(equalIndex + 1).replace("+", " ");

    key = decodeURIComponent(key);
    value = decodeURIComponent(value);
    if (queryParams[key] !== undefined) {
      if (Array.isArray(queryParams[key])) {
        queryParams[key].push(value);
      } else {
        queryParams[key] = [queryParams[key], value];
      }
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

console.log(parseQueryString("=value"));
console.log(parseQueryString("key"));
console.log(parseQueryString("key="));
console.log(parseQueryString("="));
module.exports = parseQueryString;
