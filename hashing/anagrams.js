function anagrams(stringA, stringB) {
  //1st Way with Object Maps
  //Build CharMaps
  //Compare each char's value n both CharMaps

  //Empty Objects
  const aCharMap = {};
  const bCharMap = {};

  //Clean strings so you can check characters properly
  //Convert stringA to lowercase and remove all non-word characters (e.g., punctuation, spaces).
  //Regex /[\W]\g
  // []: Denotes a character set (group of characters to match).
  // [\W]: Matches any non-word character where non-word characters are anything not a-z, A-Z, 0-9, or _
  // g: global flag
  //Empty string in replace arguments replaces matched characters with nothing, effectively removing them.
  stringA = stringA.toLowerCase().replace(/[\W]/g, "");
  stringB = stringB.toLowerCase().replace(/[\W]/g, "");

  //Check if the strings are the same length after cleaning, if not then not an anagrams
  if (stringA.length !== stringB.length) return false;

  // //Loop through each character in string and add it to object map
  // for(let char of stringA){
  //     //If char exists as a key in aCharMap then increase value, if not then assign value to one for key=char
  //     aCharMap[char] = ++aCharMap[char] || 1;

  // }

  // for(let char of stringB){
  //     bCharMap[char] = ++bCharMap[char] || 1;

  // }

  // for(let key in aCharMap){
  //     if(aCharMap[key] !== bCharMap[key]) return false;
  // }

  // return true;

  //2nd Way
  //Convert Strings to Arrays
  //Sort and compare

  //Still need to clean strings and check length

  //Convert Strings to Arrays with chaining
  //Compare strings vs compare arrays, comparing strings faster and cheaper in memory

  stringA.split("").sort().join("");
  stringB.split("").sort().join("");

  return stringA === stringB;
}
