//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/solutions/javascript 

function isPangram(string){
  //...
// Doesnt check for the presence of all 26 letters
//   const matches = string.match(/^[a-zA-Z]*$/gi);
  
//   return matches ? true: false;


    // Normalize the string: convert to lowercase
    const normalizedString = string.toLowerCase();

    // Create a Set to store unique alphabetic characters
    const uniqueLetters = new Set();

    // Loop through the string and add only alphabetic characters to the Set
    for (let char of normalizedString) {
        if (char >= 'a' && char <= 'z') {
        uniqueLetters.add(char);
        }
    }

    // A pangram must contain all 26 letters of the alphabet
    return uniqueLetters.size === 26;

}

