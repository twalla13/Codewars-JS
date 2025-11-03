function vowels(str){
    //Clean str by removing punctuation, spaces AND changing all characters to lower case
    //Convert str to array
    //Loop through array, checking if any of the chars are equal to vowel chars

    //Instead of looping use filter method from arrays

    // str = str.toLowerCase().replace(/[\W]/g,'');
    // const arr = str.spilt('');

    //1st way
    //Regex expressions with Strings using match method
        //if there are any matches it will return the array of matching characters (if not returns null)
    //Regex /[aeiou]\g 
        // []: Denotes a character set (group of characters to match).
        // [aeiou]: Matches any word character with a, e, i, o, or u
        // gi: g is global flag so it finds any character in character set (doesnt stop at 'a'),
        // i is insensitivity to case flag so it compares lower and compare case characters to char set [aeiou]
    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length: 0; 

    //2nd way 
    //Create array with vowels
    //Check if any of the chars in ste are equal to vowel array
    const vowelArr = [ 'a', 'e', 'i', 'o', 'u'];
    const count = 0;
    for(let char of str.toLowerCase()){
        //use includes method from arrays to see if any of the characters in the str exist in the vowelArr
        if(vowelArr.includes(char)){
            count++;
        }
    }

    return count++;
}