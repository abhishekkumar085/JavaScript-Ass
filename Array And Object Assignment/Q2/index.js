const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array in ascending order
ages.sort((a, b) => a - b);

// The first element (index 0) will be the minimum
const minAge = ages[0];

// The last element (index length - 1) will be the maximum
const maxAge = ages[ages.length - 1];

console.log('Sorted ages:', ages);
console.log('Minimum age:', minAge);
console.log('Maximum age:', maxAge);

// Sort the array in ascending order
ages.sort((a, b) => a - b);

let medianAge;

if (ages.length % 2 === 0) {
  // If the array length is even, median is the average of the middle two elements
  const midIndex = ages.length / 2;
  medianAge = (ages[midIndex - 1] + ages[midIndex]) / 2;
} else {
  // If the array length is odd, median is the middle element
  const midIndex = Math.floor(ages.length / 2);
  medianAge = ages[midIndex];
}

console.log('Median age:', medianAge);

// Find Average Age

const averageAge =
  ages.reduce((accum, curre) => {
    return accum + curre;
  }, 0) / ages.length;

console.log('Average Age is', averageAge);

// Find the range of Ages
ages.sort((a, b) => a - b);

// Find the minimum age (first element after sorting)
const minimumAge = ages[0];

// Find the maximum age (last element after sorting)
const maximumAge = ages[ages.length - 1];

// Calculate the range
const ageRange = maximumAge - minimumAge;

console.log('Range of ages:', ageRange);

// Find the minimum age
const minsAge = Math.min(...ages);

// Find the maximum age
const maxsAge = Math.max(...ages);

// Calculate the absolute differences
const minToAverageDiff = Math.abs(minsAge - averageAge);
const maxToAverageDiff = Math.abs(maxsAge - averageAge);

console.log(
  'Absolute difference between min and average age:',
  minToAverageDiff
);
console.log(
  'Absolute difference between max and average age:',
  maxToAverageDiff
);
