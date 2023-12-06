// Curry function
function curry(fn) {
  // Helper function to perform the actual currying
  function curryHelper(prevArgs) {
    return function (...currentArgs) {
      const allArgs = [...prevArgs, ...currentArgs];

      // Check if all arguments are provided
      if (allArgs.length >= fn.length) {
        // If all arguments are provided, execute the original function
        return fn(...allArgs);
      } else {
        // If not all arguments are provided, continue currying
        return curryHelper(allArgs);
      }
    };
  }

  // Return the initial curried function
  return curryHelper([]);
}

// Example function to add two numbers
function add(x, y) {
  return x + y;
}

// Curry the add function
const curriedAdd = curry(add);

// Test the curried function with individual arguments
const result1 = curriedAdd(5); // Returns a function expecting the second argument
const result2 = result1(3); // Returns the result of adding 5 and 3

console.log(result2); // Output: 8
