
module.exports = parseQueryString;

function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Decode percent-encoded characters in the query string
    const decodedPair = decodeURIComponent(pair);

    // Split the decoded pair into key and value
    const [key, ...value] = decodedPair.split("=");
    const newValue = value.join("=");

    // Store the decoded key and value in the queryParams object
    queryParams[key] = newValue;
  }

  return queryParams;
}

module.exports = parseQueryString;
