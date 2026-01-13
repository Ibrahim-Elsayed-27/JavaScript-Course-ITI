class shape {
    constructor() {
        if(this.constructor === shape){
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    #area() {
        throw new Error("Method 'area()' must be implemented.");
    }

    #perimeter() {
        throw new Error("Method 'perimeter()' must be implemented.");
    }
    getCount() {
        throw new Error("Method 'getCount()' must be implemented.");
    }   

}


export default shape;

