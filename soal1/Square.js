class Square {
  constructor(side) {
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }

  circumference() {
    return 4 * this.side;
  }
}

module.exports = Square;
