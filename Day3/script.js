/* Day 3 */

/* ************* Sorting ************/

// var num_arr = [];
// for (var i = 0; i < 5; i++) {
//     do {
//         var num = parseInt(prompt("Enter number " + (i + 1) + ":"));
//     } while (isNaN(num));
//     num_arr.push(num);
// }

// document.write("<h3>Numbers:</h3>");
// document.write("<hr>");

// var list = document.createElement("ul");
// document.body.appendChild(list);


// addListItem("Before sorting", num_arr);

// num_arr.sort(function (a, b) {
//     return (a>b)? 1 : -1;
// });
// addListItem("After sorting", num_arr);

// num_arr.reverse();
// addListItem("After reversing", num_arr);


// function addListItem(text, values) {
//     var li = document.createElement("li");
//     li.innerHTML = "<span style=\"color: red;\">" + text + ":</span> " + values.join(", ");
//     list.appendChild(li);
// }



/* ********* Persons ***********/

// do{
//     var no_of_persons = parseInt(prompt("Enter number of persons:"));
// }while(isNaN(no_of_persons) || no_of_persons <= 0);

// var persons = [];
// for(var i=0; i<no_of_persons; i++){
//     var person = {};        
//     do{
//         person.name = prompt("Enter name of person " + (i+1) + ":");
//     }while(!isNaN(person.name) || person.name.length < 4 || person.name.length > 9);
//     do{
//         person.age = parseInt(prompt("Enter age of person " + (i+1) + ":"));
//     }while(isNaN(person.age) || person.age < 11 || person.age > 59);
//     persons.push(person);
// }

// /// persons table
// var table = document.getElementsByTagName("table")[0];
// for (var i = 0; i < persons.length; i++) {
//     var tr = document.createElement("tr");

//     var tdName = document.createElement("td");
//     tdName.style.border = "1px solid black";
//     tdName.textContent = persons[i].name;

//     var tdAge = document.createElement("td");
//     tdAge.textContent = persons[i].age;
//     tdAge.style.border = "1px solid black";

//     tr.appendChild(tdName);
//     tr.appendChild(tdAge);
//     table.appendChild(tr);
// }

// table.style.display = "table";

