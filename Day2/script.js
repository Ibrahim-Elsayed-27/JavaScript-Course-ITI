// 1 String Object

// 1.1Write a script that reads from the user his info; validates and displays it with a welcoming message.

// The info are: Name, Email, Phone Number, Mobile Number
// do{
//     var userName = prompt("Please enter your name:");
// }while(!isNaN(userName) || userName.trim() === "");

// do{
//     var userEmail = prompt("Please enter your email:");
//     var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// }while(!regex.test(userEmail));

// do{
//     var phoneNumber = prompt("Please enter your phone number:");
// }while(isNaN(phoneNumber) || phoneNumber.length != 8);

// do{
//     var mobileNumber = prompt("Please enter your mobile number:");
// }while(isNaN(mobileNumber) || mobileNumber.length != 11 || !(["010", "011", "012", "015"].includes(mobileNumber.substring(0, 3))));

// document.write(`Welcome ${userName}!<br>Your email is: ${userEmail}<br>Your phone number is: ${phoneNumber}<br>Your mobile number is: ${mobileNumber}<br>`); 
 

// 1.2 Write a script to determine whether the entered string is palindrome or not. Ask the user whether to consider case of the entered string or not, handle both cases in your script i.e. RADAR NOON MOOM are palindrome.

// var str = prompt("Please enter a string:");
// var considerCase = confirm("Do you want to consider case sensitivity? Click 'OK' for Yes, 'Cancel' for No.");

// var processedStr = considerCase ? str : str.toLowerCase();
// var reversedStr = processedStr.split('').reverse().join('');
// if (processedStr === reversedStr) {
//     document.write(`The string "${str}" is a palindrome.`);
// } else {
//     document.write(`The string "${str}" is not a palindrome.`);
// }


/* 2 Math Object */

// 2.1 Write a script that ask the user to Enter the value of a circle’s radius in order to calculate its area and alert the result.

// var radius;
// do {
//     radius = parseFloat(prompt("Please enter the radius of the circle:"));
// } while (isNaN(radius) || radius <= 0);
// var area = Math.PI * Math.pow(radius, 2);
// alert(`The area of the circle with radius ${radius} is: ${area.toFixed(2)}`);  */


// 2.2 Enter another value to calculate its square root and alert the result.

// do {
//     var value = parseFloat(prompt("Please enter a value to calculate its square root:"));
// } while (isNaN(value) || value < 0);
// alert(`The square root of ${value} is: ${Math.sqrt(value).toFixed(2)}`);



/* 3 Array Object */

// 3.1 Fill an array of 3 elements from the user, and apply each of the following mathematical operations on it (+, *, /). Format the output as shown in Fig.
// var arr = [];
// for (var i = 0; i < 3; i++) {
//     var element;
//     do {
//         element = parseFloat(prompt(`Please enter element ${i + 1}:`));
//     } while (isNaN(element));
//     arr.push(element);
// }
// var sum = 0;
// var multiplication = 1;
// var division = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     multiplication *= arr[i];
//     if (i > 0) {
//         division /= arr[i];
//     }
// }   

// document.write(`sum of the 3 values ${arr.join(' + ')} = ${sum}<br>`);
// document.write(`multiplication of the 3 values ${arr.join(' * ')} = ${multiplication}<br>`);
// document.write(`division of the 3 values ${arr[0]} / ${arr.slice(1).join(' / ')} = ${division}<br>`); 


/* 4 Functions */



// 4.1 Create a function that accepts only 2 parameters and throw exception if number of parameters either less than or exceeds 2 parameters
// function checkParameters(param1, param2) {
//     if (arguments.length !== 2) {
//         throw ("Function requires exactly 2 parameters.");
//     } else {
//         return "Function executed successfully with 2 parameters.";
//     }       
// }

// document.write(checkParameters(5, 10)); // Correct usage
// document.write("<br>");
// document.write(checkParameters(5)); // Incorrect usage



// 4.2 Write a function that takes any number of parameters and returns them reversed using array’s reverse function.
// function reverseParameters() {
//     var argsArray = [];
//     for (var i = arguments.length - 1; i >= 0; i--) {
//         argsArray.push(arguments[i]);
//     }
//     return argsArray;
// }

// document.write("Reversed parameters: " + reverseParameters(1, 2, 3, 4, 5).join(', '));


// 4.3 Write your own function that can add n values ensure that all passing parameters are numerical values only
// function addNumericalValues() {
//     var sum = 0;            
//     for (var i = 0; i < arguments.length; i++) {
//         if (isNaN(arguments[i])) {
//             throw (`Parameter ${arguments[i]} is not a numerical value.`);
//         }
//         sum += Number(arguments[i]);
//     }
//     return sum;
// }

// document.write("Sum of numerical values: " + addNumericalValues(10, 20, 30, 40));
// document.write("<br>");
// document.write("Sum of numerical values: " + addNumericalValues(10, "abc", 30)); // This will throw an exception


// 4.4 Make a function that takes date string as a parameter, and returns the Day name (Saturday, Sunday,…) of the given date.
// function getDayName(dateString) {
//     var date = new Date(dateString);
//     var day = date.getDay();
//     var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     return dayNames[day];
// }

// document.write("Day name for 2026-01-04: " + getDayName("2026-01-04")); 