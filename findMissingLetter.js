function findMissingLetter(array) {
  //create an array of a-z
  //convert to to lower case when comparing
  //loop the array and compare with the a-z string
  console.log("Array: ", array);

  const alph = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let charMap = {};
  let firstLetter = array[0].toLowerCase();

  // a : 0, b:1 , c:1
  const alphMap = array.map((letter, index) => {
    charMap[letter] = index;
  });
  console.log(alphMap);

  let index = alphMap.find((element) =>{
    element === charMap[firstLetter];
  });
  console.log(index);

  return;
  for (let letter of array) {
    //if the current letter and the alph letter are the same we continue
    // else they are not, not consecutive
    console.log("Letter: ", letter);

    if (letter.toLowerCase() !== alph[index].toLowerCase()) {
      console.log("Alph: ", alph[index]);
      return alph[index];
    }

    index++;
  }
  return " ";
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
