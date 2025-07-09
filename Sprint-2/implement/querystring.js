
function parseQueryString(queryString) {
  const queryParams = {};

  
  if (queryString.startsWith("?")) { // Remove "?" if present at start 
    queryString = queryString.substring(1);
  }

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue; // Skip empty strings from && or trailing &,

    const idx = pair.indexOf("=");

    let rawKey, rawValue;

    if (idx === -1) {
      rawKey = pair;
      rawValue = "";
    } else {
      rawKey = pair.slice(0, idx);// starts at zero, stop just before the index of =
      rawValue = pair.slice(idx + 1);
    }

    // Decode without replacing '+' with space
    const key = decodeURIComponent(rawKey);
    const value = decodeURIComponent(rawValue);

    if (queryParams.hasOwnProperty(key)) {
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
