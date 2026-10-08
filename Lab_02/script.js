// ==========================================
// PART 1 - SYNTAX WARM-UP
// ==========================================

console.log("My name is Aadya");
console.log(5 + 5);

// This is a comment
console.log("Comments don't run this part");


// ==========================================
// PART 2 - VARIABLES
// ==========================================

// Task 2.1
let studentName = "Aadya";
let rollNumber = 21;
let course = "BCA";

console.log(studentName, rollNumber, course);


// Task 2.2
const collegeName = "Dev Sanskriti Vishwavidyalaya";
console.log(collegeName);


// Task 2.3
// Valid:
// let student_name;
// let $marks;

// Invalid:
// let 1stYear;
// let let;
// let roll no;


// Task 2.4
if (true) {
    var a = "I am var";
    let b = "I am let";
}

console.log(a);
// console.log(b); // ReferenceError because b is block-scoped


// ==========================================
// PART 3 - DATA TYPES
// ==========================================

// Task 3.1

let name = "Aadya";
let marks = 85;
let isStudent = true;
let result;
let value = null;
let bigNumber = 12345678901234567890n;
let studentId = Symbol("student");

console.log(name, typeof name);
console.log(marks, typeof marks);
console.log(isStudent, typeof isStudent);
console.log(result, typeof result);
console.log(value, typeof value);
console.log(bigNumber, typeof bigNumber);
console.log(studentId, typeof studentId);


// Task 3.2

const student = {
    name: "Rohit",
    rollNo: 21,
    course: "BCA",
    isPassing: true
};

console.log(student.name);
console.log(student.isPassing);

const subjects = [
    "JavaScript",
    "DBMS",
    "Networking",
    "Operating System"
];

console.log(subjects[0]);
console.log(subjects[2]);
console.log(subjects[3]);


// Task 3.3

console.log(typeof null);


// ==========================================
// PART 4 - OPERATORS & EXPRESSIONS
// ==========================================

// Task 4.1

let num1 = 20;
let num2 = 5;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);


// Task 4.2

console.log(5 == "5");
console.log(5 === "5");

console.log(0 == false);
console.log(0 === false);

console.log(null == undefined);
console.log(null === undefined);


// Task 4.3

let age = 17;
let hasID = true;

console.log(age >= 18 && hasID);
console.log(age >= 18 || hasID);
console.log(!hasID);


// Task 4.4

let studentMarks = 75;

let passResult = studentMarks >= 40 ? "Pass" : "Fail";

console.log(passResult);


// Testing with another value

studentMarks = 35;

passResult = studentMarks >= 40 ? "Pass" : "Fail";

console.log(passResult);


// ==========================================
// PART 5 - MINI PROJECT
// SIMPLE GRADE CALCULATOR
// ==========================================

let subject1 = 85;
let subject2 = 80;
let subject3 = 90;

let total = subject1 + subject2 + subject3;

let average = total / 3;

let grade = average >= 90
    ? "A"
    : average >= 75
    ? "B"
    : average >= 40
    ? "C"
    : "F";

console.log("Total:", total);
console.log("Average:", average);
console.log("Grade:", grade);

console.log("Type of average:", typeof average);

console.log(
    "Total: " + total +
    ", Average: " + average.toFixed(2) +
    ", Grade: " + grade
);


// Bonus

let attendance = 80;

let isEligibleForScholarship =
    average >= 85 && attendance >= 75;

console.log(
    "Scholarship Eligible:",
    isEligibleForScholarship
);


// ==========================================
// PART 6 - DEBUGGING PRACTICE
// ==========================================

// Snippet 1 - Corrected

let totalValue = 10 + 20;

console.log(totalValue);


// Snippet 2 - Corrected

let rate = 5;
rate = 10;

console.log(rate);


// Snippet 3 - Corrected

let username = "admin";

console.log(username);


// Snippet 4 - Corrected

let secondAttempt = "retry";

console.log(secondAttempt);