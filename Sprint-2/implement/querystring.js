function parseQueryString(queryString) {
  const queryParams = {};
  if (typeof queryString !== "string" || queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue;

    const [rawKey, ...rest] = pair.split("=");
    if (rawKey === "") continue; // skip empty keys

    const key = decodeURIComponent(rawKey.replace(/\+/g, " "));
    const value = decodeURIComponent(rest.join("=").replace(/\+/g, " "));
    
    

    if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
      // already exists, convert to array or push
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
module.exports = parseQueryString;
