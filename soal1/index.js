const Square = require('./Square.js');
const Rectangle = require('./Rectangle.js');

const square = new Square(4);
console.log(square);
console.log(`Area of square: ${square.area()}`);
console.log(`Circumference of square: ${square.circumference()}`);

console.log("=====================================");

const rectangle = new Rectangle(4, 2);
console.log(rectangle);
console.log(`Area of rectangle: ${rectangle.area()}`);
console.log(`Circumference of rectangle: ${rectangle.circumference()}`);
