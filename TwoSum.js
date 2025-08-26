// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

function twoSum(numbers, target) {
  // Iterate over the array to find the first number's index
  for (let index1 = 0; index1 < numbers.length; index1++) {
    // Calculate the value needed to reach the target
    const index2Value = target - numbers[index1];

    // Find the second index, ensuring it is not the same as index1
    const index2 = numbers.findIndex((num, index) => num === index2Value && index !== index1);

    // If a valid index2 is found, return the indices as an array
    if (index2 !== -1) {
      return [index1, index2];
    }
  }

  // If no solution is found (though the problem guarantees one), return null
  return null;
}