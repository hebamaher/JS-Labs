// Q1
// var y;
// console.log(y);
// console.log(y);
// var x=10;
// var y = 20;
// console.log(y*x-2);
// var y;
// console.log(typeof y);
// var x = "1";
// var y = 2;
// console.log(x+y);
// var x = 1;
// var y = true;
// console.log(x+y);

// Q2
// var message = prompt("Enter a message:");

// for (var i = 1; i <= 6; i++) {
//     document.write("<h" + i + ">" + message + "</h" + i + ">");
// }

// Q3
// var sum = 0;
// var number;

// do {
//     number = prompt("Enter a number");

//     if (isNaN(number) || number === "") {
//         alert("Please enter a valid number");
//         continue;
//     }

//     number = parseInt(number);

//     if (number === 0) {
//         break;
//     }

//     sum += number;

// } while (sum <= 100);

// alert("Total sum = " + sum);

// Q4
var name = "";
var birthYear = 0;
var age = 0;
do {
    name = prompt("Enter your name:");
} while (!isNaN(name) || name === ""); //|| name === "" not reuired as isNaN("") returns false

do {
    birthYear = prompt("Enter your birth year:");
    if (isNaN(birthYear) || birthYear === "" || birthYear >= 2010) {
        alert("Please enter a valid year");
        continue;
    }
    birthYear = parseInt(birthYear);
    age = 2025 - birthYear;
} while (isNaN(age) || age < 0);
document.write("<b><u>Name</u></b>" + ": "+ name + "<br>");
document.write("<b><u>Birth Year</u></b>" + ": " + birthYear + "<br>");
document.write("<b><u>Age</u></b>" + ": " + age + "<br>");