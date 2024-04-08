// programming question - Hash Tag generator

// You will be required to implement a function generateHash that generates a hash tag from a given input string. the hash tag should be constructed as follows:

// the input string should be converted to hash tag format, where each word is capitalized and contatenated together without spaces.
// if the length of the input string is greater than 280 chars, or if the input string is empty or contains spaces, then functions should return false
//  else function should return generated hash tag with prefixed with #

function generateHash(string) {
  if (string.trim().length === 0 || string.length > 280) return false
  const arr = string.split(' ')
  const hashTagFormat = getEachWordCapitalized(arr)
  return `#${hashTagFormat}`
}

function getEachWordCapitalized(arr) {
  return arr
    .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase())
    .join('')
}

console.log(generateHash('my name is thapa technical'))
//  o/p - "#MyNameIsThapaTechnical"
