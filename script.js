// 1. Check Voting Eligibility

let age = 20;

if (age >= 18) {
    console.log("Eligible for voting");
}
else {
    console.log("Not eligible for voting");
}

// 2. Positive or Negative

let num = -5;

if (num > 0) {
    console.log("Positive number");
}
else if (num < 0) {
    console.log("Negative number");
}
else {
    console.log("Zero");
}

// 3. Student Grade Calculator

let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

// 4. Day of the Week
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}

// 5. Simple Calculator

let a = 10;
let b = 5;
let op = "+";

if (op == "+") {
    console.log("Result = " + (a + b));
}
else if (op == "-") {
    console.log("Result = " + (a - b));
}
else if (op == "*") {
    console.log("Result = " + (a * b));
}
else if (op == "/") {
    if (b != 0) {
        console.log("Result = " + (a / b));
    }
    else {
        console.log("Cannot divide by zero");
    }
}
else {
    console.log("Invalid operator");
}

// 6. Traffic Light Simulator

let light = "red";

if (light == "red") {
    console.log("STOP");
}
else if (light == "yellow") {
    console.log("GET READY");
}
else if (light == "green") {
    console.log("GO");
}
else {
    console.log("Invalid traffic light");
}
// 7. Looping from 1 to 10
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 8. Looping Even Numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 9. Looping Odd Numbers from 1 to 15
for (let i = 1; i <= 15; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
// 10. Sum of Numbers from 1 to 100
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);

// 11. Multiplication Table of 5
for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}

// 12. Countdown from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}