// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript 


function duplicateEncode(word){
    // clean word by moving all to lower case 
     word = word.toLowerCase();

     const wordArr = word.split('');
     // Make an map of the letter and its frequence
     // Build result based  based on frequence and append either ( or )

     
     const count = {};
     let openParent = [];
     let closeParent = [];

     wordArr.forEach(letter => {
        count[letter] = (count[letter] || 0) + 1;
     });

     const result = wordArr.map(letter => {
        // If the character appears once, append '('; otherwise, append ')'
        return count[letter] === 1 ? '(' : ')';
     });


    // Step 4: Join the result array into a string and return it
    return result.join('');
}

duplicateEncode("din");