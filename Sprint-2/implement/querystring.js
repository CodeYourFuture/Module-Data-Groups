// function parseQueryString(queryString) {
//   const queryParams = {};
//   if (queryString.length === 0) {
//     return queryParams;
//   }
//   const keyValuePairs = queryString.split("&");

//   for (const pair of keyValuePairs) {
//     const [key, value] = pair.split("=");
//     queryParams[key] = value;
//   }

//   return queryParams;
// }

// module.exports = parseQueryString;

function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryString) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const index = pair.indexOf("=");

    if (index === -1) {
      // key with no value
      queryParams[pair] = "";
    } else {
      const key = pair.slice(0, index);
      const value = pair.slice(index + 1);
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
