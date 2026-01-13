import shape from './shape.js';

class rectangle extends shape {
    static count = 0;
    constructor(length, width) {
        ++rectangle.count;  
        if (rectangle.count > 1) {
            throw new Error("Only one instance of rectangle is allowed.");
        }
        super();
        this.length = length;
        this.width = width;
    }   
    #area() {
        return this.length * this.width;
    }   
    #perimeter() {
        return 2 * (this.length + this.width);
    }
    getCount() {
        return rectangle.count;
    }   

    tostring() {
        console.log(`Rectangle with length ${this.length} and width ${this.width} has area ${this.#area()} and perimeter ${this.#perimeter()}`);
    }
}

export default rectangle;