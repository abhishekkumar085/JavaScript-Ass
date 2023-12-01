// the comma operator , is used to evaluate multiple expressions in a single statement. It is often used in situations where multiple expressions need to be executed, and only the result of the last expression is considered. The expressions are evaluated from left to right, and the value of the entire expression is the value of the last expression.

// example
let a = 5, b = 10, c = 15;

let result = (a++, b++, c++);

console.log(result); // Outputs: 15
console.log(a);      // Outputs: 6
console.log(b);      // Outputs: 11
console.log(c);      // Outputs: 16
