// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  //happy coding!
  

  //Boring way
  //object map for num: occurrence
  const count = {};

  //step 1: count occurrences of each number in array (create object map)
  A.forEach((num) => {
    count[num] = (count[num] || 0) + 1; //if key exists then add value + 1, if not add 0 + 1 (creates key:value (num:count))
  });

  //step 2: find odd count in object map
  for(let num in count){
    if(count[num] % 2 !== 0){
        return parseInt(num);
    }
  }
  

  //Cool way
  // XOR in JS is a bitwise operator that compares binary representation of the two numbers and 
  // returns a new number where the result is 1 if bites of operands are different and 0 if bits are the same
//   1.	Key Properties of XOR:
// 	•	a ^ a = 0: Any number XORed with itself cancels out and becomes 0.
// 	•	a ^ 0 = a: XORing a number with 0 leaves the number unchanged.
// 	•	XOR is commutative and associative, meaning the order of operations doesn’t matter.
// 	2.	Reduce with XOR:
// 	•	Numbers appearing even times cancel out completely because:
// 	•	Example: x ^ x = 0.
// 	•	If a number appears 4 times: (x ^ x) ^ (x ^ x) = 0 ^ 0 = 0.
// 	•	Numbers appearing odd times are left over because one instance is never canceled:
// 	•	Example: x ^ x ^ x = (x ^ x) ^ x = 0 ^ x = x.

// function findOdd(arr) {
//   return arr.reduce((accumulator, current) => accumulator ^ current, 0);
// }

}