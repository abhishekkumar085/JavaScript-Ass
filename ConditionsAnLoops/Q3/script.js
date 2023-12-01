// Loops are control flow structures in programming that allow you to repeatedly execute a block of code as long as a certain condition is true. They are used to automate repetitive tasks, making it more efficient to handle situations where the same or similar operations need to be performed multiple times.

// 1.For loop
//=> The for loop is used when the number of iterations is known or can be determined in advance.

// 2.while loop
// The while loop is used when the number of iterations is not known in advance, and the loop continues as long as the specified condition is true.

// 3.Do while loop


// Syntax

// for (initialization; condition; update) {
    // Code to be executed in each iteration
// }

// example

for (let j = 0; j < 5; j++) {
    console.log(j);
}

// syntax while loop
// while (condition) {
    // Code to be executed in each iteration
// }

// example
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// do while loop
// Similar to the while loop, but the block of code is executed at least once before the condition is checked.

// do {
    // Code to be executed in each iteration
// } while (condition);


// example
let x = 0;

do {
    console.log(x);
    x++;
} while (x < 5);
