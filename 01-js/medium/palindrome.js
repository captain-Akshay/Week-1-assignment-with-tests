/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  str=str.replace(/[^a-z0-9]/g, '');
  let temp1=str.split("");
  let temp2=str.split("");
  temp1.reverse();
  for(let i=0;i<temp1.length;i++){
    if(temp1[i]!==temp2[i])return false;
  }
  return true;
}

module.exports = isPalindrome;
