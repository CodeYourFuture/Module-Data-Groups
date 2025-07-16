function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) return queryParams;

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, ...rest] = pair.split("="); // Grab everything after first '='
    const value = rest.join("="); // Safely join back if value had '=' signs
 
    const decodedKey = decodeURIComponent((key || "").replace(/\+/g, " "));
    const decodedValue = decodeURIComponent((value || "").replace(/\+/g, " "));
 
     queryParams[decodedKey] = decodedValue;
   }

  return queryParams;
}

module.exports = parseQueryString;
