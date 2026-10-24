class Rectangle {
    constructor(width, height) {
        this.width = width,
        this.height =  height
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width * 2) + (this.height * 2)
    }
}

const myRectangle = new Rectangle( Math.floor(Math.random() * 1000),  Math.floor(Math.random() * 1000));

console.log(`Rectangle: ${myRectangle.width}x${myRectangle.height}`);
console.log(`Rectangle Area: ${myRectangle.getArea()}`);
console.log(`Rectangle Perimeter: ${myRectangle.getPerimeter()}`)
