// count number of charecter

// Write a function called countChar that takess two parameters: a string and a character to count. the function should return the number of times the specified character appears in the string.

// contstaints
// the function should be case sensitive
//  function should handle both lowercase and uppercase characters
//  the charecter parameter can be any printable ascii charecter

function countChar(string, character) {
  return string
    .split('')
    .filter((ele) => ele.toLowerCase() === character.toLowerCase()).length
}

console.log(countChar('MissIssippi', 'I'))
