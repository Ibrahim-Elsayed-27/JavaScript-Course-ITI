import shape  from "./shape.js";

class circle extends shape {
    static count = 0;
    constructor(radius) {
        super();
        this.radius = radius;
    }

    #area() {
        return Math.PI * this.radius * this.radius;
    }

    #perimeter() {
        return 2 * Math.PI * this.radius;
    }
    getCount() {
        return circle.count;
    }

    tostring() {
        console.log(`Circle with radius ${this.radius} has area ${this.#area()} and perimeter ${this.#perimeter()}`);
    }
}

export default circle;