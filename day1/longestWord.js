// Write a function findLognestWord that takes string as an input and returns a longest word in a string. if there are multiple longest word then, return the first encountered.

// constraints
//  the input may contain alphanumeric chars, digits, spaces and punctuations
// the input string is non-empty
//  the input str may contain multiple words separated by spaces

// NOTE
// if the string contains only white spaces, the function should return false.
// it should ignore trailing spaces.

function findLognestWord(string) {
  // if the strig is empty or contains spaces, then return false
  if (!string || !string.trim().length) return false
  // convert string to array
  const array = string.split(' ')
  // sort the array in descending order or ascending order
  array.sort((a, b) => a.length - b.length)
  // and send the last or first one based on sorted order return the value
  return array.at(-1)
}

console.log(
  findLognestWord('Watch Thapa Technical Javascript course on youtube')
)
