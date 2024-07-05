// Create two arrays of numbers
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

// Use the spread operator to combine the elements of numbers1 and numbers2
const numbers = [...numbers1, ...numbers2];

// Define an arrow function called square
const square = (number) => number * number;

// Use the map method to create a new array called squares
const squares = numbers.map(square);

// Define an arrow function called isEven
const isEven = (number) => number % 2 === 0;

// Use the filter method to create a new array called evenSquares
const evenSquares = squares.filter(isEven);

// Use destructuring assignment to extract the first and second elements of evenSquares
const [firstEvenSquare, secondEvenSquare] = evenSquares;

// Use a template literal to log the arrays and extracted values
console.log(`Original numbers array: ${numbers}`);
console.log(`Squares array: ${squares}`);
console.log(`Even squares array: ${evenSquares}`);
console.log(`First even square: ${firstEvenSquare}`);
console.log(`Second even square: ${secondEvenSquare}`);