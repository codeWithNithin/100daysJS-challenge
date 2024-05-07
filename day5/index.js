// sort an array

// Write a function to sort an array of numbers in ascending order

function sortAscending(arr) {
  const result = [...arr]

  for (let i = 0; i < result.length; i++) {
    let outerElement = result[i]
    for (let j = i + 1; j < result.length; j++) {
      let innerElement = result[j]
      if (outerElement > innerElement) {
        let temp = result[i]
        result[i] = result[j]
        result[j] = temp
      }
    }
  }

  return result
}

console.log(sortAscending([5, 3, 1, 8]))
// console.log(sortAscending([5, 3, 10, 8]))

//  a function should take an array of numbers as input
//  it should return an new array with the numbers sorted in ascending order.
//  the original array should remain unchanged.
//  You are not allowed to use in built sort() method.
