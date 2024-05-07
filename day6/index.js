// write a function to determine whether the given str is palindrome or not. A palindrome is a word, phrase, number or other sequence of charecters that reads the same forward and backword, ignoring spaces, punctuation, and capitalization.

function isPalindrome(str) {
  const inputStr = str.toLowerCase().replace(/\W/g, '')
  const reveresedStr = inputStr.split('').reverse().join('')
  console.log(reveresedStr)
  return inputStr === reveresedStr
}

console.log(isPalindrome('A man, a plan, a canal')) // true
console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('hello')) // false
