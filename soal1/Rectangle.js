class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }

  circumference() {
    return 2 * (this.length + this.width);
  }
};

module.exports = Rectangle;
