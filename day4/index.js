// write a function called checkTriangleType that takes 3 params representing the length of the sides of a triangle. the function should return a string indicating the type of triangle: "equilateral" , 'isosceles', 'scalene'

function checkTriangleType(a, b, c) {
  if (a === b && a === c && b === c) return 'equilateral'
  if (a === b || b === c || a === c) return 'isosceles'
  return 'scalene'
}

console.log(checkTriangleType(3, 3, 3)) // output: 'equilateral'
console.log(checkTriangleType(3, 4, 3)) // output: 'isosceles'
console.log(checkTriangleType(5, 8, 6)) // output: 'scalene'

// if all 3 sides are equal, then print equilateral
//  if any 2 sides are equal, then print isosceles
//  if all sides are different, then print scalene
