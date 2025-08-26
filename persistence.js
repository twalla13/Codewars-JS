// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
  //code me
  //num to string
  //string to array then convert each element to int for math
  //have variable that gets updated with product
  //this product needs to be updated in a loop (feels like recursion but no thanks)
  // while loop that breaks when the length of the result is 1

  let numString = num.toString();
  let count = 0;

  if (numString.length === 1) return 0;

  while (numString.length !== 1) {
    let digits = numString.split("");
    let product = digits.reduce(
      (accumulator, currentValue) => accumulator * currentValue
    );

    numString = product.toString();

    count++;
  }

  return count;
}

console.log(persistence(39));
