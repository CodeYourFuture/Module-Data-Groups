function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const queryPart = queryString.split("?");
  const keyValuePairs = queryPart[1].split("&");
  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
    }

  return queryParams;
}

module.exports = parseQueryString;

//MDN: note for my self alternate method inside the for loop
//const [key, ...valueParts] = pair.split("=");
// // const value = valueParts.join("="); // Join the remaining parts back together in case there are additional equals signs
 