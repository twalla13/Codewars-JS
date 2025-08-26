// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

decodeMorse = function(morseCode){
  // Your code here
  // You can use MORSE_CODE[morse]
  
  //Split morseCode up by spaces, converting it to array
  //Loop through array and get each letter from morse code table
//   const arr = morseCode.split(' ');
//   const result = [];
//   for(let letter of arr){
//     result.push(MORSE_CODE[letter]);
//   }
  
//   return result.join('');

//step 1: trim morseCode because starting and tailing zeros dont matter 
morseCode = morseCode.trim();

//step 2: split morseCode by 3 SPACES instead of 1 bc instructions
const words = morseCode.split('   ');

//use map function to change each 
const decodedWords = words.map((word) => {


    //split word up into letters (1 space between letters) then use MORSE_CODE
    const letter = word.split(' ');

    //return from map function
    //use map function on letters to use MORSE_CODE table
    return letter.map(letter => MORSE_CODE[letter].join(''));
});

//Join words back together with one space 
return decodedWords.join(' ');
}