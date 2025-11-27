function parseQueryString(queryString) {
  const parsedParams = {}; // Gets the final key-value pairs

  if (!queryString) return parsedParams;

  // Removes leading '?' if present

  if (queryString.startsWith("?")) {
    queryString = queryString.slice(1);
  }

  if (queryString.length === 0) {
    return parsedParams;
  }

  // Split the string into individual key-value pairs
  const pairs = queryString.split("&");

  for (const pair of pairs) {
    if (!pair) continue; // skip empty segments (like from && or trailing &) eg "name=John&&age=30" 

    const equalSignIndex = pair.indexOf("=");

    let paramKey, paramValue;

    if (equalSignIndex === -1) {

      // If '=' not found we have a key exists but value is empty

      paramKey = pair;
      paramValue = "";
    } else {
      paramKey = decodeURIComponent(pair.slice(0, equalSignIndex));
      paramValue = decodeURIComponent(pair.slice(equalSignIndex + 1));
    }

    parsedParams[paramKey] = paramValue; // overwrite previous value if key repeats
  }

  return parsedParams;
}

module.exports = parseQueryString;

// In querystring.js function implemented. 
