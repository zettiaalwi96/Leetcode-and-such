// Leetcode
// Question 9: Palidrome Number

//Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


// Method 1: WRONG
var isPalindrome = function (x) {
  let digits = String(x).split("").map(Number);
  if (digits[0] === digits[digits.length - 1]) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(1000021)); // Suppposed to be false


// Method 2: CORRECT
var isPalindrome = function (x) {
    let digitsReverse = String(x).split("").reverse().join("")
    // console.log(digitsReverse) // is a string
    // console.log(parseInt(digitsReverse)) // is an integer
  if (x === parseInt(digitsReverse)) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(1000021));