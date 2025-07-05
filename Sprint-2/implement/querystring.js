function parseQueryString(query) {
  if (!query) return {};                                        // Return an empty object if input is empty, null, or undefined. 

  return Object.fromEntries(                                    // Using Object.fromEntries to convert array of [key, value] pairs into an object
    query.split("&").map((pair) => {                            // Split the query string into individual key-value pairs


      const [key, ...rest] = pair.split("=");                   // Split each pair at the first '='
      const value = rest.length > 0 ? rest.join("=") : "";      // If at least one after the first '=', join values with '=' as separator or default to empty string
      return [key, value];                                      
    })
  );

}

module.exports = parseQueryString;
