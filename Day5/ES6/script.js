

var x = 5;
var y = 10;

console.log("x:", x);   
console.log("y:", y);

[y,x] = [x,y];

console.log("x:", x);   
console.log("y:", y);


function maxArray(...numbers) {
    var copy = [...numbers];
    var max = copy[0];
    for (var num of copy) {
        if (num > max) {
            max = num;
        }   
    }
    return max;
}

console.log(maxArray(3, 5, 7, 2, 8, 1));