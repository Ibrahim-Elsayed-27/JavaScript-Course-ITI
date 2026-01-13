import shape  from './shape.js';


class square extends shape {
    static count = 0;
    constructor(side) {
        ++square.count;
        if (square.count > 1) {
            throw new Error("Only one instance of square is allowed.");
        }
        super();
        this.side = side;
    }

    #area() {
        return this.side * this.side;
    }

    #perimeter() {
        return 4 * this.side;
    }

    getCount() {
        return square.count;
    }

    tostring() {
        console.log(`Square with side ${this.side} has area ${this.#area()} and perimeter ${this.#perimeter()}`);
    }

}

export default square;

