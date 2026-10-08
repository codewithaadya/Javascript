
// PART 1 - HOISTING WITH var

console.log(" PART 1: HOISTING WITH var");

// Task 1.1
console.log(city);

var city = "Haridwar";

console.log(city);


// Task 1.2
function showMessage() {
    console.log(message);

    var message = "Hello";

    console.log(message);
}

showMessage();


// Task 1.3 - Shadow Trap
var name = "global";

function test() {
    console.log(name);

    var name = "local";
}

test();


// Task 1.4 - Magic Trick
console.log(food);

var food = "Pizza";

console.log(food);



// PART 2 - FUNCTION HOISTING

console.log(" PART 2: FUNCTION HOISTING ");

// Function declaration
console.log(square(4));

function square(n) {
    return n * n;
}


// Task 2.1
// This produces TypeError because sayHi is undefined
// when the function call is made.

// Uncomment to test:
//
// sayHi();
// var sayHi = function () {
//     console.log("Hi!");
// };


// Task 2.2 - const
// Uncomment to test:
//
// sayHiConst();
//
// const sayHiConst = function () {
//     console.log("Hi!");
// };


// Task 2.3 - Sorting Table

// Function declaration works before its line
console.log("Function declaration:", functionA());

function functionA() {
    return "Works";
}


// Function expression using var
// Does NOT work before declaration


// Function expression using const
// Does NOT work before declaration


// Function expression using let
// Does NOT work before declaration


// Task 2.4 - Two Functions, Same Name

console.log(fnA());

function fnA() {
    return "First";
}

function fnA() {
    return "Second";
}


// Task 2.5 - Top-Down Story

console.log("Starting my morning...");
wakeUp();
eatBreakfast();
goToCollege();

function wakeUp() {
    console.log("Wake up");
}

function eatBreakfast() {
    console.log("Eat breakfast");
}

function goToCollege() {
    console.log("Go to college");
}



// PART 3 - let, const AND TDZ

console.log("PART 3: let, const AND TDZ");


// Task 3.1
// The following code gives ReferenceError.
// Uncomment to test:
//
// console.log(PI);
// const PI = 3.14;


// Task 3.2

console.log(typeof x);

var x = 5;


// The following gives ReferenceError because of TDZ.
// Uncomment to test:
//
// console.log(typeof y);
// let y = 5;


// Task 3.3
console.log("undefined: variable declared with var before assignment.");
console.log("ReferenceError: accessing let or const before initialization.");
console.log("TypeError: trying to call a non-function value as a function.");


// Task 3.4 - Error Detective

// (a) Prints undefined
console.log(detectA);
var detectA = 10;


// (b) ReferenceError
// Uncomment to test:
//
// console.log(detectB);
// let detectB = 20;


// (c) TypeError
// Uncomment to test:
//
// detectC();
// var detectC = 30;


// (d) Works because function declaration is hoisted
console.log(detectD());

function detectD() {
    return "Function works because of hoisting";
}



// PART 4 - FIRST CLOSURE


console.log("PART 4: CLOSURES");


// Task 4.1 - Counter

function makeCounter() {

    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counterA = makeCounter();
const counterB = makeCounter();

console.log("Counter A:", counterA());
console.log("Counter A:", counterA());
console.log("Counter A:", counterA());
console.log("Counter A:", counterA());
console.log("Counter A:", counterA());

console.log("Counter B:", counterB());
console.log("Counter B:", counterB());


// Task 4.2
// count is private inside makeCounter.
// Uncommenting the following line will give ReferenceError.
//
// console.log(count);


// Task 4.3 - Multiplier Factory

function makeMultiplier(n) {

    return function (x) {
        return x * n;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log("Double:", double(5));
console.log("Triple:", triple(5));


// Task 4.4 - Greeter

function makeGreeter(greeting) {
    return function (name) {
    return greeting +", " + name + "!";
    };
    }
// Task 4.5 - Chai Counter

function makeCupCounter() {

    let cups = 0;

    return function () {
        cups++;

        return "Cup number " + cups + " of chai";
    };
}

const friendOne = makeCupCounter();
const friendTwo = makeCupCounter();

console.log(friendOne());
console.log(friendOne());
console.log(friendOne());

console.log(friendTwo());
console.log(friendTwo());

// PART 5 - PRIVATE DATA WITH CLOSURES


console.log("PART 5: PRIVATE DATA ");


// Task 5.1 - Wallet

function createWallet(start) {

    let balance = start;

    return {

        add(n) {
            balance += n;
            return balance;
        },

        spend(n) {

            if (n > balance) {
                return "Insufficient balance";
            }

            balance -= n;
            return balance;
        },

        show() {
            return balance;
        }
    };
}

const wallet = createWallet(100);

console.log(wallet.add(50));
console.log(wallet.spend(30));
console.log(wallet.spend(500));
console.log(wallet.show());

console.log(wallet.balance);


// Try to cheat
wallet.balance = 99999;

console.log("After trying to change balance:");
console.log(wallet.show());


// Task 5.2 - Wallet with reset

function createWalletWithReset(start) {

    let balance = start;

    return {

        add(n) {
            balance += n;
            return balance;
        },

        spend(n) {

            if (n > balance) {
                return "Insufficient balance";
            }

            balance -= n;
            return balance;
        },

        show() {
            return balance;
        },

        reset() {
            balance = start;
            return balance;
        }
    };
}

const resetWallet = createWalletWithReset(500);

console.log("Wallet:", resetWallet.show());
console.log("After add:", resetWallet.add(200));
console.log("After spend:", resetWallet.spend(100));
console.log("After reset:", resetWallet.reset());


// Task 5.3 - Login Guard

function limiter(max) {

    let used = 0;

    return function () {

        if (used < max) {

            used++;

            return "Attempt " + used + " of " + max;

        } else {

            return "Locked!";
        }
    };
}

const tryLogin = limiter(3);

console.log(tryLogin());
console.log(tryLogin());
console.log(tryLogin());
console.log(tryLogin());


// Task 5.4 - Secret Diary

function createDiary() {

    let entries = [];

    return {

        write(text) {
            entries.push(text);
        },

        read() {
            return entries;
        }
    };
}

const diary = createDiary();

diary.write("Today I learned JavaScript.");
diary.write("I learned about closures.");

console.log(diary.read());

// Private array cannot be accessed directly
console.log(diary.entries);

// PART 6 - CLOSURES IN LOOPS
console.log(" PART 6: CLOSURES IN LOOPS ");


// var example

const withVar = [];

for (var i = 0; i < 3; i++) {

    withVar.push(() => i);

}

console.log("Using var:", withVar.map(f => f()));


// let example

const withLet = [];

for (let j = 0; j < 3; j++) {

    withLet.push(() => j);

}

console.log("Using let:", withLet.map(f => f()));


// Task 6.2 - Timer

for (var k = 1; k <= 3; k++) {

    setTimeout(() => {
        console.log("var:", k);
    }, 1000);

}


for (let m = 1; m <= 3; m++) {

    setTimeout(() => {
        console.log("let:", m);
    }, 1000);

}


// Task 6.3 - Fixed version

for (let n = 1; n <= 3; n++) {

    setTimeout(() => {
        console.log("Fixed:", n);
    }, 1000);

}

// PART 7 - MINI PROJECT
// SMART WALLET WITH LOGIN GUARD

console.log("PART 7: SMART WALLET ");


// Main code is placed at the TOP of the project logic.
// Functions are declared below, so function hoisting allows them to work.

const smartWallet = createSmartWallet(500);

const loginGuard = limiter(3);

console.log("Initial Balance:", smartWallet.show());

console.log("Adding 200:");
console.log(smartWallet.add(200));

console.log("Trying to spend 150:");

if (loginGuard() !== "Locked!") {
    console.log(smartWallet.spend(150));
}

console.log("Trying to spend 1000:");

if (loginGuard() !== "Locked!") {
    console.log(smartWallet.spend(1000));
}

console.log("Final Balance:");
console.log(smartWallet.show());

console.log("Transaction History:");
console.log(smartWallet.history());


// Smart Wallet Function

function createSmartWallet(start) {

    let balance = start;

    let transactions = [];

    return {

        add(amount) {

            balance += amount;

            transactions.push("Added " + amount);

            return balance;
        },

        spend(amount) {

            if (amount > balance) {

                return "Insufficient balance";
            }

            balance -= amount;

            transactions.push("Spent " + amount);

            return balance;
        },

        show() {

            return balance;
        },

        history() {

            return transactions;
        }
    };
}


// BONUS - DISCOUNT FACTORY

console.log(" BONUS ");

function makeDiscount(percent) {

    return function (price) {

        return price - (price * percent / 100);

    };
}

const festive = makeDiscount(10);

console.log("Discounted Price:", festive(500));

// PART 8 - DEBUGGING CHALLENGE
console.log(" PART 8: DEBUGGING");


// Snippet 1
// Original:
// console.log(total);
// var total = 5;

// Fixed code:
var total = 5;
console.log("Fixed total:", total);


// Snippet 2
// Original:
// greet();
// var greet = function () {
//     console.log("Hi");
// };

// Fixed code without changing var to const:
var greet = function () {
    console.log("Hi");
};

greet();


// Snippet 3
// Original:
// function makeCounter() {
//     let c = 0;
//     return c++;
// }
//
// const next = makeCounter();
// console.log(next, next);

// Fixed code:
function makeCounterFixed() {

    let c = 0;

    return function () {
        c++;
        return c;
    };
}

const next = makeCounterFixed();

console.log("Counter:", next());
console.log("Counter:", next());


// Snippet 4
// Original:
// function makeCounter2() {
//     return function () {
//         let count = 0;
//         count++;
//         return count;
//     };
// }

// Fixed code:
function makeCounter2Fixed() {

    let count = 0;

    return function () {

        count++;

        return count;
    };
}

const n = makeCounter2Fixed();

console.log("Fixed Counter:", n());
console.log("Fixed Counter:", n());
console.log("Fixed Counter:", n());

