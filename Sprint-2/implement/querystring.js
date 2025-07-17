function parseQueryString(queryString) {
  
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
    // in: empty string => out: empty object
  }

  const keyValuePairs = queryString.split("&");   // keyValuePairs is an array containing items like key=value (a pair)

  for (const pair of keyValuePairs) {

    if (pair.includes("=")) {
      firstIndexOfEqualsSign = pair.indexOf("="); // split at first = only so that values can contain =

      const key = pair.slice(0,firstIndexOfEqualsSign);
      const value = pair.slice(firstIndexOfEqualsSign+1);
      queryParams[key] = value;   // where there are repeat keys in query string, this causes some data to be lost/overwritten when making the object. rewrite?
    }

    else {queryParams[pair] = "";}  // if the pair doesn't have an = character, it is taken to be a key with an empty value.

  }

  return queryParams;
}

module.exports = parseQueryString;
