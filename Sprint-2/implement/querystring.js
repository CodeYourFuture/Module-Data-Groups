function parseQueryString(queryString) {
  const queryParams = {};
  if (typeof queryString !== "string") {
    throw new Error("Invalid input");
  }
  if (queryString.length === 0) return queryParams;

  const parseQueryStringArray = queryString.replace(/\+/g, " ").split("&");
  let key;
  let value;
  for (const pair of parseQueryStringArray) {
    if (pair === "") continue;
    let equalIndex = pair.indexOf("=");
    if (equalIndex === -1) {
      key = pair;
      value = "";
    } else {
      key = decodeURIComponent(pair.slice(0, equalIndex));
      value = decodeURIComponent(pair.slice(equalIndex + 1));
    }
    if (Object.hasOwn(queryParams, key)) {
      if (Array.isArray(queryParams[key])) {
        queryParams[key].push(value);
      } else {
        queryParams[key] = [queryParams[key]];
        queryParams[key].push(value);
      }
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
