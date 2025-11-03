var searchArray = function (arrayToSearch, query) {
  // TODO your code here
  //Check if at least one element is not valid array and has doesnt have the correct length (some method)
  if (
    !Array.isArray(arrayToSearch) ||
    arrayToSearch.some(
      (element) => !Array.isArray(element) || element.length !== 2
    )
  )
    throw new Error("All elements must be arrays of length 2!");

  if (!Array.isArray(query) || query.length !== 2) {
    throw new Error("Query must be an array of length 2!");
  }

  //Find the index where the element is equal to the query
  const result = arrayToSearch.findIndex(
    (element) => element[0] === query[0] && element[1] === query[1]
  );

  return result;
};
