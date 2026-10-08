// PART 1 - FUNCTION DECLARATION BASICS
// Task 1.1 - isAdult()

function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log("Task 1.1");
console.log(isAdult(15));
console.log(isAdult(18));
console.log(isAdult(25));


// Task 1.2 - Member Discount

function calculateDiscount(price, isMember) {
    if (isMember === true) {
        return price * 0.9;
    } else {
        return price;
    }
}

console.log("Task 1.2");
console.log(calculateDiscount(1000, true));
console.log(calculateDiscount(1000, false));

// PART 2 - FUNCTION EXPRESSIONS & ARROW FUNCTIONS

// Task 2.1 - isAdult as Function Expression

const isAdultExpression = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

console.log("Task 2.1");
console.log(isAdultExpression(16));
console.log(isAdultExpression(20));


// Task 2.2 - Quick Square

const square = n => n * n;

console.log("Task 2.2");
console.log(square(2));
console.log(square(5));
console.log(square(10));


// Task 2.3 - fullName

const fullName = (first, last) => first + " " + last;

console.log("Task 2.3");
console.log(fullName("Aadya", "Gupta"));

// PART 3 - DEFAULT PARAMETERS & ARGUMENT MISMATCH

// Task 3.1 - calculatePrice

function calculatePrice(price, tax = 0.18) {
    return price + (price * tax);
}

console.log("Task 3.1");

// Custom tax rate
console.log(calculatePrice(1000, 0.10));

// Default tax rate
console.log(calculatePrice(1000));


// Task 3.2 - calculateArea with one argument

function calculateArea(length, width) {
    return length * width;
}

console.log("Task 3.2");
console.log(calculateArea(5));

// Explanation:
// width becomes undefined because no second argument is provided.
// Therefore, 5 * undefined results in NaN.

// PART 4 - GLOBAL VS LOCAL SCOPE
// Task 4.1

let taxRate = 0.18;

function finalPrice(amount) {
    return amount + (amount * taxRate);
}

console.log("Task 4.1");
console.log(finalPrice(1000));


// Task 4.2 - Local variable with same name

let storeName = "QuickMart";

function printStore() {

    let storeName = "Local Store";

    console.log("Inside function:", storeName);
}

printStore();

console.log("Outside function:", storeName);

// Explanation:
// The local storeName only exists inside the function.
// The global storeName remains unchanged.

// PART 5 - BLOCK SCOPE: let VS var


// Task 5.1 - let

console.log("Task 5.1");

if (true) {

    let discountApplied = true;

    console.log("Inside block:", discountApplied);
}

console.log(
    "Outside block:",
    typeof discountApplied
);

// typeof returns "undefined" because let is block-scoped.


// Task 5.2 - var

console.log("Task 5.2");

if (true) {

    var discountAppliedVar = true;

    console.log("Inside block:", discountAppliedVar);
}

console.log(
    "Outside block:",
    discountAppliedVar
);

// var is not block-scoped.
// Therefore, it can be accessed outside the if block.

// PART 6 - SCOPE CHAIN & SHADOWING
// Task 6.1 - Nested Function

function outerFunction() {

    let message = "Hello from outer function";

    function innerFunction() {

        console.log(message);
    }

    innerFunction();
}

console.log("Task 6.1");
outerFunction();


// Task 6.2 - Secret Admin Mode

let role = "guest";

function loginAsAdmin() {

    let role = "admin";

    console.log("Inside function:", role);
}

console.log("Task 6.2");

loginAsAdmin();

console.log("Global role:", role);

// The local role does not change the global role.

// PART 7 - MINI PROJECT
// STUDENT GRADE & FEE MANAGER

// Requirement 1
let totalFeeCollected = 0;


// Requirement 2 - Function Declaration

function calculateGrade(marks) {

    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else {
        return "F";
    }
}


// Requirement 3 - Function Expression

const calculateLateFee = function(daysLate = 0) {

    return daysLate * 10;
};


// Requirement 4 - Arrow Function

const processStudent = (name, marks, daysLate = 0) => {

    let grade = calculateGrade(marks);

    let lateFee = calculateLateFee(daysLate);

    totalFeeCollected = totalFeeCollected + lateFee;

    console.log(
        name +
        " - Grade: " +
        grade +
        ", Late Fee: Rs." +
        lateFee
    );
};


// Requirement 5 - Three students

processStudent("Aditi", 92, 0);

processStudent("Rohit", 68, 3);

processStudent("Meera", 55, 5);

// Default daysLate is used here
processStudent("Aadya", 80);


// Requirement 6 - Final total

console.log(
    "Final Total Fee Collected: Rs." +
    totalFeeCollected
);

// PART 8 - DEBUGGING CHALLENGE

// Snippet 1

// Original problem:
// function addNumbers(a, b) {
//     a + b;
// }

// The function calculates a + b but does not return it.

// Corrected code:

function addNumbers(a, b) {

    return a + b;
}

console.log("Snippet 1:");
console.log(addNumbers(5, 3));



// Snippet 2


// Original problem:
// function setDiscount() {
//     discount = 20;
// }

// discount was not declared.

// Corrected code:

function setDiscount() {

    let discount = 20;

    return discount;
}

console.log("Snippet 2:");
console.log(setDiscount());


// Snippet 3

// Original problem:
// let balance = 1000;
//
// function withdraw(balance, amount) {
//     balance = balance - amount;
//     return balance;
// }
//
// withdraw(balance, 200);
// console.log(balance);

// The parameter 'balance' is local to the function.
// It does not change the global balance.

// Corrected version:

let accountBalance = 1000;

function withdraw(amount) {

    accountBalance = accountBalance - amount;

    return accountBalance;
}

console.log("Snippet 3:");
console.log(withdraw(200));
console.log(accountBalance);


// Snippet 4

// Original problem:
// sayHello();
// const sayHello = function() {
//     console.log("Hi!");
// }

// A const function expression cannot be called before
// its declaration.

// Corrected code:

const sayHello = function() {

    console.log("Hi!");
};

console.log("Snippet 4:");

sayHello();