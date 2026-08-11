function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  //replace initial "?" if present
  if (queryString.startsWith("?")) {
    queryString = queryString.replace("?", "");
  }
  //replace encoded characters
  queryString = decodeURIComponent(queryString);

  //replace "+" with " "
  queryString = queryString.replaceAll("+", " ");

  const keyValuePairs = queryString.split("&");

  //filter out empty strings from the keyValuePairs array of strings
  let filteredKeyValuePairs = keyValuePairs.filter(
    (keyValuePair) => keyValuePair.length > 0
  );

  //assign key value pairs created by separating on the first "=" sign
  filteredKeyValuePairs.forEach((str) => {
    //if no "=", then the string should be the key
    if (!str.includes("=")) {
      const key = str;
      queryParams[key] = "";
    } else {
      const indexOfFirstEqual = str.indexOf("=");
      const key = str.slice(0, indexOfFirstEqual);
      const value = str.slice(indexOfFirstEqual + 1);
      queryParams[key] = value;
    }
  });

  return queryParams;
}

module.exports = parseQueryString;
