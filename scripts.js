//Students Who Passed(Array of objects, for loop, if...else)
let student = [
    { name: "rachel", mark: 85 },
    { name: "shiny", mark: 35 },
    { name: "shirin", mark: 75 },
    { name: "sri", mark: 25 }
];

for (let i = 0; i < student.length; i++) {
    if (student[i].mark >= 40) {
        console.log(student[i].name + " Passed");
    } else {
        console.log(student[i].name + " Failed");
    }
}

//Highest Mark(Array of objects, for loop, if)
let student = [
    { name: "rachel", mark: 85 },
    { name: "shirin", mark: 90 },
    { name: "sri", mark: 75 }
];

let highest = student[0];

for (let i = 1; i < student.length; i++) {
    if (student[i].mark > highest.mark) {
        highest = student[i];
    }
}

console.log("Highest Mark: " + highest.name);
console.log("Mark: " + highest.mark);

//Calculate Total and Average(Array, for loop, arithmetic operators)
let marks = [80, 90, 70, 60];

let total = 0;

for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
}

let average = total / marks.length;

console.log("Total = " + total);
console.log("Average = " + average);

//Product Shopping Cart(Array of objects, loop, condition, total calculation)

let products = [
    { name: "Pen", price: 10, quantity: 2 },
    { name: "Book", price: 50, quantity: 1 },
    { name: "Bag", price: 500, quantity: 1 }
];

let totals = 0;

for (let i = 0; i < products.length; i++) {
    let cost = products[i].price * products[i].quantity;

    if (products[i].quantity > 0) {
        totals = totals + cost;
        console.log(products[i].name + " = " + cost);
    }
}

console.log("Total Bill = " + totals);

// Search for a Student(Array of objects, loop, if...else, Boolean variable)
let students = [
    { name: "rachel", mark: 85 },
    { name: "shirin", mark: 90 },
    { name: "shiny", mark: 75 }
];

let searchName = "shiny";
let found = false;

for (let i = 0; i < students.length; i++) {
    if (students[i].name === searchName) {
        console.log("Student Found: " + students[i].name);
        console.log("Mark: " + students[i].mark);
        found = true;
    }
}

if (found === false) {
    console.log("Student Not Found");
}






