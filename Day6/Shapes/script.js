import square from "./square.js";
import rectangle from "./rectangle.js";
import circle from "./circle.js";


let sq1 = new square(4);
sq1.tostring();
console.log(`Square count: ${sq1.getCount()}`);
let rect1 = new rectangle(4, 5);
rect1.tostring();
console.log(`Rectangle count: ${rect1.getCount()}`);
let cir1 = new circle(3);
cir1.tostring();
console.log(`Circle count: ${cir1.getCount()}`);

let sq2 = new square(5); 