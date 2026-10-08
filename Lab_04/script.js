// ==========================================
// PART 0 - FROM TERNARY TO IF-ELSE
// ==========================================

console.log("========== PART 0 ==========");

// Old way - Ternary
let marks = 68;

let result = marks >= 40 ? "Pass" : "Fail";

console.log("Ternary:", result);


// New way - if-else
let marks2 = 68;

if (marks2 >= 40) {
    console.log("if-else: Pass");
} else {
    console.log("if-else: Fail");
}


// Task 0.1
console.log("Both methods give the same answer.");
console.log("I find if-else easier to read.");


// ==========================================
// PART 1 - IF STATEMENT
// ==========================================

console.log("========== PART 1 ==========");


// Task 1.1
let marksTask1 = 65;

if (marksTask1 >= 40) {
    console.log("You passed!");
}


// Test with another marks value
let marksTask1Second = 35;

if (marksTask1Second >= 40) {
    console.log("You passed!");
}


// Task 1.2 - Can You Watch This Movie?

let age1 = 10;

if (age1 >= 18) {
    console.log("You can watch this movie");
}


let age2 = 16;

if (age2 >= 18) {
    console.log("You can watch this movie");
}


let age3 = 20;

if (age3 >= 18) {
    console.log("You can watch this movie");
}


// ==========================================
// PART 2 - IF-ELSE
// ==========================================

console.log("========== PART 2 ==========");


// Task 2.1 - Even or Odd

let number1 = 10;

if (number1 % 2 === 0) {
    console.log(number1 + " is an Even number");
} else {
    console.log(number1 + " is an Odd number");
}


let number2 = 7;

if (number2 % 2 === 0) {
    console.log(number2 + " is an Even number");
} else {
    console.log(number2 + " is an Odd number");
}


let number3 = 15;

if (number3 % 2 === 0) {
    console.log(number3 + " is an Even number");
} else {
    console.log(number3 + " is an Odd number");
}


// Task 2.2 - ATM PIN Checker

let correctPIN = 1234;
let enteredPIN = 1234;

if (enteredPIN === correctPIN) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


// Test with wrong PIN
let wrongPIN = 5678;

if (wrongPIN === correctPIN) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


// Task 2.3 - Pass/Fail using if-else

let passMarks = 68;

if (passMarks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

console.log("I prefer if-else because it is easier to read.");


// ==========================================
// PART 3 - IF-ELSE-IF
// ==========================================

console.log("========== PART 3 ==========");


// Grade Example
let marksGrade = 68;

if (marksGrade >= 90) {
    console.log("Grade A");
} else if (marksGrade >= 75) {
    console.log("Grade B");
} else if (marksGrade >= 60) {
    console.log("Grade C");
} else if (marksGrade >= 40) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}


// Task 3.1 - Movie Ticket Price

let movieAge1 = 3;

if (movieAge1 < 5) {
    console.log("Movie Ticket: Free");
} else if (movieAge1 < 12) {
    console.log("Movie Ticket: Rs. 100");
} else if (movieAge1 < 60) {
    console.log("Movie Ticket: Rs. 250");
} else {
    console.log("Movie Ticket: Rs. 150");
}


// Test 2
let movieAge2 = 10;

if (movieAge2 < 5) {
    console.log("Movie Ticket: Free");
} else if (movieAge2 < 12) {
    console.log("Movie Ticket: Rs. 100");
} else if (movieAge2 < 60) {
    console.log("Movie Ticket: Rs. 250");
} else {
    console.log("Movie Ticket: Rs. 150");
}


// Test 3
let movieAge3 = 25;

if (movieAge3 < 5) {
    console.log("Movie Ticket: Free");
} else if (movieAge3 < 12) {
    console.log("Movie Ticket: Rs. 100");
} else if (movieAge3 < 60) {
    console.log("Movie Ticket: Rs. 250");
} else {
    console.log("Movie Ticket: Rs. 150");
}


// Test 4
let movieAge4 = 65;

if (movieAge4 < 5) {
    console.log("Movie Ticket: Free");
} else if (movieAge4 < 12) {
    console.log("Movie Ticket: Rs. 100");
} else if (movieAge4 < 60) {
    console.log("Movie Ticket: Rs. 250");
} else {
    console.log("Movie Ticket: Rs. 150");
}


// Test 5
let movieAge5 = 7;

if (movieAge5 < 5) {
    console.log("Movie Ticket: Free");
} else if (movieAge5 < 12) {
    console.log("Movie Ticket: Rs. 100");
} else if (movieAge5 < 60) {
    console.log("Movie Ticket: Rs. 250");
} else {
    console.log("Movie Ticket: Rs. 150");
}


// Task 3.2 - Weather Advice Bot

let temperature1 = 40;

if (temperature1 > 35) {
    console.log("It's hot! Drink water.");
} else if (temperature1 > 20) {
    console.log("Nice weather!");
} else if (temperature1 > 10) {
    console.log("A bit cold. Wear a jacket.");
} else {
    console.log("Very cold! Stay warm.");
}


// Test 2
let temperature2 = 25;

if (temperature2 > 35) {
    console.log("It's hot! Drink water.");
} else if (temperature2 > 20) {
    console.log("Nice weather!");
} else if (temperature2 > 10) {
    console.log("A bit cold. Wear a jacket.");
} else {
    console.log("Very cold! Stay warm.");
}


// Test 3
let temperature3 = 15;

if (temperature3 > 35) {
    console.log("It's hot! Drink water.");
} else if (temperature3 > 20) {
    console.log("Nice weather!");
} else if (temperature3 > 10) {
    console.log("A bit cold. Wear a jacket.");
} else {
    console.log("Very cold! Stay warm.");
}


// Test 4
let temperature4 = 5;

if (temperature4 > 35) {
    console.log("It's hot! Drink water.");
} else if (temperature4 > 20) {
    console.log("Nice weather!");
} else if (temperature4 > 10) {
    console.log("A bit cold. Wear a jacket.");
} else {
    console.log("Very cold! Stay warm.");
}


// ==========================================
// PART 4 - SWITCH-CASE
// ==========================================

console.log("========== PART 4 ==========");


// Task 4.1 - Days of the Week

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


// Task 4.2 - Mood Emoji Switch

let mood = "happy";

switch (mood) {

    case "happy":
        console.log("😊 You are feeling happy!");
        break;

    case "sad":
        console.log("😢 It's okay to feel sad.");
        break;

    case "angry":
        console.log("😠 Take a deep breath and relax.");
        break;

    case "tired":
        console.log("😴 You should take some rest.");
        break;

    default:
        console.log("I don't recognize this mood.");
}


// Task 4.3 - Missing break experiment
// Example without break:

let testDay = 3;

switch (testDay) {

    case 3:
        console.log("Wednesday");

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Another day");
}


// Explanation:
// Without break, JavaScript continues to the next case.
// This is called fall-through.


// ==========================================
// PART 5 - MINI PROJECT: SIMPLE ATM
// ==========================================

console.log("========== PART 5 - ATM ==========");


// Situation 1 - Wrong PIN

let correctPinATM = 1234;
let enteredPinATM = 9999;

let balance = 5000;

if (enteredPinATM === correctPinATM) {

    console.log("PIN Correct");

} else {

    console.log("Wrong PIN. Access Denied.");
}


// Situation 2 - Correct PIN + Insufficient Funds

let correctPinATM2 = 1234;
let enteredPinATM2 = 1234;

let balance2 = 5000;

let choice2 = 2;
let withdrawAmount = 7000;

if (enteredPinATM2 === correctPinATM2) {

    switch (choice2) {

        case 1:
            console.log("Current Balance: Rs." + balance2);
            break;

        case 2:

            if (withdrawAmount > balance2) {

                console.log("Insufficient funds");

            } else {

                balance2 = balance2 - withdrawAmount;

                console.log("New Balance: Rs." + balance2);
            }

            break;

        case 3:

            let depositAmount2 = 2000;

            balance2 = balance2 + depositAmount2;

            console.log("New Balance: Rs." + balance2);

            break;

        default:
            console.log("Invalid choice");
    }

} else {

    console.log("Wrong PIN. Access Denied.");
}


// Situation 3 - Correct PIN + Successful Deposit

let correctPinATM3 = 1234;
let enteredPinATM3 = 1234;

let balance3 = 5000;

let choice3 = 3;
let depositAmount3 = 2000;

if (enteredPinATM3 === correctPinATM3) {

    switch (choice3) {

        case 1:

            console.log("Current Balance: Rs." + balance3);

            break;


        case 2:

            let withdrawAmount3 = 1000;

            if (withdrawAmount3 > balance3) {

                console.log("Insufficient funds");

            } else {

                balance3 = balance3 - withdrawAmount3;

                console.log("New Balance: Rs." + balance3);
            }

            break;


        case 3:

            balance3 = balance3 + depositAmount3;

            console.log("New Balance: Rs." + balance3);

            break;


        default:

            console.log("Invalid choice");
    }

} else {

    console.log("Wrong PIN. Access Denied.");
}


// ==========================================
// PART 6 - DEBUGGING CHALLENGE
// ==========================================

console.log("========== PART 6 - DEBUGGING ==========");


// Snippet 1

// WRONG:
// if (age = 18)

// Correct:
let debugAge = 15;

if (debugAge === 18) {

    console.log("Adult");

} else {

    console.log("Minor");
}


// Explanation:
// = is assignment.
// === is comparison.


// ------------------------------------------
// Snippet 2

let fruit = "apple";

switch (fruit) {

    case "apple":

        console.log("Red fruit");

        break;

    case "banana":

        console.log("Yellow fruit");

        break;

    default:

        console.log("Unknown fruit");
}


// Explanation:
// break was missing after the apple case.


// ------------------------------------------
// Snippet 3

let choice = "2";

switch (choice) {

    case "1":

        console.log("One");

        break;

    case "2":

        console.log("Two");

        break;

    default:

        console.log("Invalid");
}


// Explanation:
// choice contains a String "2", so the case must also use "2".
// switch uses strict comparison.


// ==========================================
// END OF LAB 04
// ==========================================

console.log("========== LAB 04 COMPLETED ==========");