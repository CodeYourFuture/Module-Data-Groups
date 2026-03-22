/*
function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}
  */






function parseQueryString(queryString) {
  if (!queryString || queryString.trim() === "") {
    return {};
  }

  const cleanedString = queryString.startsWith("?") // check if it has ? and remocve
    ? queryString.substring(1)
    : queryString;

  const pairs = cleanedString.split("&"); //Split
  const result = {};

  for (const pair of pairs) {
    // split on the FIRST '='
    const [key, ...valueParts] = pair.split("=");
    const value = valueParts.join("="); // Rejoin if value contained '='

    // Decode key and value to handle special characters
    const decodedKey = decodeURIComponent(key);
    const decodedValue = value ? decodeURIComponent(value) : "";

    if (decodedKey) {
      result[decodedKey] = decodedValue;
    }
  }

  return result;

}



module.exports = parseQueryString;
