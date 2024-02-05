function testRegex(pattern, inputString) {
  // Create a regex object with the provided pattern
  const regex = new RegExp(pattern);

  // Test if there is a match in the inputString
  const result = regex.test(inputString);

  return result;
}

// Test the function with various patterns and strings
const pattern1 = /hello/;
const string1 = 'Hello, world!';
console.log(testRegex(pattern1, string1)); // Should return true

const pattern2 = /\d+/; // Matches one or more digits
const string2 = 'The number is 42';
console.log(testRegex(pattern2, string2)); // Should return true

const pattern3 = /[a-zA-Z]+/; // Matches one or more alphabetic characters
const string3 = '123abc';
console.log(testRegex(pattern3, string3)); // Should return true

const pattern4 = /\s/; // Matches any whitespace character
const string4 = 'NoWhitespace';
console.log(testRegex(pattern4, string4)); // Should return false
