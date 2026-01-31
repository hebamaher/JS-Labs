// Q1
// var name = "";
// var phone = 0;
// var mobile = 0;
// var mobileRegex = /^(010|011|012)\d{8}$/;
// var email = "";
// var emailRegex = /^[a-zA-Z]+@[0-9]+\.com$/;

// do {
//     name = prompt("Enter your name:");
// } while (!isNaN(name)); //|| name === "" not reuired as isNaN("") returns false

// do {
//     phone = prompt("Enter your phone number:");
// } while (isNaN(phone) || phone.length !== 8);

// do {
//     mobile = prompt("Enter your mobile number:");
// } while (!mobileRegex.test(mobile));

// do {
//     email = prompt("Enter your email address:");
// } while (!emailRegex.test(email));

// document.write("<p>Name: " + name + "</p>");
// document.write("<p>Phone Number: " + phone + "</p>");
// document.write("<p>Mobile Number: " + mobile + "</p>");
// document.write("<p>Email: " + email + "</p>");

// Q2
// var str = prompt("Enter a string:");
// var choice;
// do {
//     choice = prompt("Consider case sensitivity? (yes / no)");
// } while (choice.toLowerCase() !== "yes" && choice.toLowerCase() !== "no");


// var original = str;
// var reversed;

// if (choice.toLowerCase() === "no") {
//     original = str.toLowerCase();
// }

// reversed = original.split("").reverse().join("");

// if (original === reversed) {
//     alert("The entered string is a palindrome.");
// } else {
//     alert("The entered string is NOT a palindrome.");
// }

// Q3
// var radius = prompt("Enter the radius of the circle:");
// radius = Number(radius);
// var area = Math.PI * Math.pow(radius, 2);
// alert("The area of the circle is: " + area.toFixed(2));

// var number = prompt("Enter a number to calculate its square root:");
// number = Number(number);
// var squareRoot = Math.sqrt(number);
// alert("The square root of the number is: " + squareRoot.toFixed(2));

// Q4
var arr = [];
for (var i = 0; i < 3; i++) {
    var num;
    do {
        num = prompt(`Enter number ${i + 1}:`);
    } while (isNaN(num) || num === "");
    arr.push(Number(num));
}

var sum = eval(arr.join(" + "));
var product = eval(arr.join(" * "));
var division = eval(arr.join(" / "));

document.write("<h3>Sum of the 3 values: " + arr.join(" + ") + " = " + sum + "</h3>");
document.write("<h3>Multiplication of the 3 values: " + arr.join(" *") + " = "+ product + "</h3>");
document.write("<h3>Division of the 3 values: " + arr.join(" / ") + " = "+ division + "</h3>");

Q5
// function myFunc(a, b) {
//     if(arguments.length !== 2) {
//         throw("Function requires exactly 2 arguments.");
//     }
//     return a + b;
// }
// //console.log(myFunc(5, 10, 11));
// console.log(myFunc(5, 10));


// function reverseParams(...args) {
//     return args.reverse();
// }
// console.log(reverseParams(1, 2, 3, 4, 5));


// function mySum(...args) {
//     var sum = 0;
//     for(var i = 0; i < args.length; i++) {
//         if(typeof args[i] !== "number" || isNaN(args[i])){
//             throw(`Parameter "${args[i]}" is not a valid number!`);
//         }
//         sum += args[i];
//     }
//     return sum;
// }
// // console.log(mySum(1, 2, "3", 4, 5));
// console.log(mySum(1, 2, 3, 4, 5));

// function getDayName(dateString) {
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     var date = new Date(dateString);      
//     var dayIndex = date.getDay();         
//     return days[dayIndex];
// }

// console.log(getDayName("2026-01-04")); 
// console.log(getDayName("2026-01-05"));