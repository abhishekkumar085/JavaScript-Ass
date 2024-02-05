function findCharacterClasses(inputString) {
    // Define regex patterns for character classes
    const digitPattern = /\d/g; // Matches any digit
    const uppercasePattern = /[A-Z]/g; // Matches any uppercase letter
    const lowercasePattern = /[a-z]/g; // Matches any lowercase letter
    const specialCharPattern = /[^a-zA-Z0-9]/g; // Matches any special character (non-alphanumeric)
  
    // Find matches for each character class
    const digits = inputString.match(digitPattern) || [];
    const uppercaseLetters = inputString.match(uppercasePattern) || [];
    const lowercaseLetters = inputString.match(lowercasePattern) || [];
    const specialCharacters = inputString.match(specialCharPattern) || [];
  
    // Return an object containing the matches
    return {
      digits,
      uppercaseLetters,
      lowercaseLetters,
      specialCharacters,
    };
  }
  
  // Test the function with a sample string
  const inputString = "Hello123! World";
  const result = findCharacterClasses(inputString);
  
  // Display the results
  console.log("Digits:", result.digits);
  console.log("Uppercase Letters:", result.uppercaseLetters);
  console.log("Lowercase Letters:", result.lowercaseLetters);
  console.log("Special Characters:", result.specialCharacters);
  