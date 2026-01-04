
// 1)a)

/* var y;
console.log(y); */

// 1)b)
/* console.log(y); */

// 1)c)
/* var x = 10;
var y = 20;
console.log(y*x-2);  */

// 1)d)
/* var y;
console.log(typeof y); */ 

// 1)e)
/* var x = "1";
var y = 2;
console.log(x + y);  */

// 1)f)
/* var x = "1";
var y = true;
console.log(x + y); */

/* ************************************* */

//2

/* var message = prompt("Enter a message:");
if(isNaN(message)){
    for(var i = 1; i < 7; i++){
        document.write("<h"+i+">"+message+"</h"+i+">");
    }
} */


/* ************************************* */

//3

/* var sum = 0;
do{
    var n = parseInt(prompt("Enter a number:"));
    sum += n;
    console.log("Sum: "+sum);
}while(!(n === 0 || sum>100));
 */

/* ************************************* */

//4


var name;
do{
    name = prompt("Enter your name:");
}while(!isNaN(name) || name.trim() === ""); 
document.write("Name: "+name+"<br>");
var birthYear;
do{
    birthYear = parseInt(prompt("Enter your birth year:"));
}while(isNaN(birthYear) || birthYear >= 2010);
var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;
document.write("Birth year: "+birthYear+"<br>");
document.write("Age: "+age+"<br>");
