// generate greeting function..

function generateGreeting(name) {
  return 'Hey! ' + name + ' Good Morning!'; //greeting message for 3 others people
}
const person1 = generateGreeting('Abhi');  //function call inside person1 variable.
console.log(person1); // Hey! Abhi Good Morning!

const person2 = generateGreeting('Rahul');
console.log(person2); // Hey! Rahul Good Morning!

const person3 = generateGreeting('vivek');
console.log(person3); // Hey! vivek Good Morning!
