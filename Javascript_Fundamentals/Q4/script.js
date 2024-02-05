function extractDateParts(pattern, inputString) {
    // Create a regex object with the provided pattern
    const regex = new RegExp(pattern);
  
    // Test if there is a match in the inputString
    const match = regex.exec(inputString);
  
    // Check if there is a match
    if (match) {
      // Extract specific parts using groups
      const day = match[1] || "Not available";
      const month = match[2] || "Not available";
      const year = match[3] || "Not available";
  
      // Return an object containing the extracted date parts
      return {
        day,
        month,
        year,
      };
    } else {
      return null; // Return null if there is no match
    }
  }
  
  // Test the function with a pattern to extract date parts
  const datePattern = /(\d{2})-(\d{2})-(\d{4})/; // Pattern for DD-MM-YYYY format
  const dateString = "05-02-2024";
  
  const extractedDate = extractDateParts(datePattern, dateString);
  
  // Display the results
  if (extractedDate) {
    console.log("Day:", extractedDate.day);
    console.log("Month:", extractedDate.month);
    console.log("Year:", extractedDate.year);
  } else {
    console.log("No match found for the given pattern.");
  }
  