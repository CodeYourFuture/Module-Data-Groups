function parseQueryString(queryString) {
  const queryParams = {};

  // 〰️ Check for null, undefined, or non-string input
  if (!queryString || typeof queryString !== "string") {
    return queryParams;
  }

  // 〰️ Split the query string into key-value pairs using '&'
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // 〰️ Split each pair by the first '=' and keep remaining as the value
    const [rawKey, ...rawValue] = pair.split("=");

    // 〰️ Decode keys and values safely
    // 〰️ Using decodeURIComponent() to convert percent-encoded strings into readable text.
    // 〰️ Example: 'John%20Doe' -> 'John Doe', '5%25' -> '5%'
    // 〰️ rawKey || "" ensures that if rawKey is undefined, null, or empty, it returns to an empty string.
    const key = decodeURIComponent(rawKey || "");
    const value = decodeURIComponent(rawValue.join("=") || "");

    // 〰️ Store the key-value pair in the object
    queryParams[key] = value;
  }

  return queryParams;
}

console.log(parseQueryString("equation=x=y+1"));
console.log(parseQueryString("key1=value1&key2=value2"));
console.log(parseQueryString("equation=x=y+1&other=abc=123"));
console.log(parseQueryString("name=John%20Doe&value=5%25")); 
console.log(parseQueryString("first%20name=Alice"));
console.log(parseQueryString("%26key%3D=value%3F"));
console.log(parseQueryString("equation=x%3Dy%2B1"));
console.log(parseQueryString("specialChars=!%40%23%24%25%5E%26*()"));
console.log(parseQueryString("emptyKey="));
console.log(parseQueryString("=emptyValue"));
console.log(parseQueryString("multiple=values&key=value"));
console.log(parseQueryString(null));
console.log(parseQueryString(undefined));
console.log(parseQueryString(""));

module.exports = parseQueryString;
