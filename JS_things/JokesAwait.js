async function sayJoke(apiUrl, jokeId) {
  try {
    // use mocked `fetch(url)`

    //Fetch the data from response
    //fetch returns a promose so we waittttt
    const response = await fetch(apiUrl);

    //Check if response was 200
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${apiUrl}`);
    }

    //convert response to json
    //depends on fetch so we must waitttt
    const data = await response.json();

    //Validate Json
    if (!Array.isArray(data)) {
      //not an array throw and error bc not json
      throw new Error(`No jokes`);
    }

    //Find joke with given id
    const joke = data.filter((joke) => joke.id === jokeId);

    //if no joke found throw an error
    if (!joke) {
      throw new Error(`No joke found with id ${jokeId}`);
    }

    //return the API objects, returning multiple functions in syntax below
    return {
      saySetup: () => joke.setup,
      sayPunchLine: () => joke.punchline,
    };
  } catch (error) {
    throw error;
  }
}
