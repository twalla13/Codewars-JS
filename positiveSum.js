// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript


function positiveSum(arr) {
  
  const positive = arr.filter(num => num > 0);

  // If arr.filter(num => num > 0) results in an empty array (e.g., all numbers in arr are non-positive), 
  // calling reduce without an initial value will throw an error because reduce cannot calculate a sum without an initial value or elements to process.
  return positive.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  
}