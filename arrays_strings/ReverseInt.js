// https://leetcode.com/problems/reverse-integer/description/

var reverseInt = function (num) {
  let ans = 0;
  while (num > 0) {
    remainder = num % 10;
    //ex: 1234
    // remainder = 4
    // ans = 4

    // remainder = 3
    // ans = 40 + 3
    //
    ans = ans * 10 + remainder;

    num = num / 10;
  }
};
