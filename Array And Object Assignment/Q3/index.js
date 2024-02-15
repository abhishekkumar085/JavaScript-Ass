// object Extensibility and sealing

// a) Use the Object.preventEatensions method to prevent any further additions of properties to the student object.

const student = {
  name: 'John',
  age: 18,
};
Object.preventExtensions(student);

student.grade = 'A';

console.log(student.grade);

// b)  Use the Object.isEatensible method to check if the student object is extensible. Store the result in a variable called extensibleStatus.

const student1 = {
  school: 'St.Merry Public School Barhi jharkhand',
  class: 'II',
};

// Check if the student object is extensible
const extensibleStatus = Object.isExtensible(student1);

console.log(extensibleStatus);
// create a new object teacher set property to math
const teacher = {
  subject: 'Math',
};
console.log(teacher.subject);
// d)
// Seal the teacher object
Object.seal(teacher);

// Attempt to add a new property
teacher.name = 'John';

// Attempt to delete a property
delete teacher.subject;

console.log(teacher.subject);
Object.seal(teacher);

const sealedStatus = Object.isSealed(teacher);

console.log(sealedStatus);

// f)
Object.seal(teacher);

// Check if the teacher object is extensible
// const extensibleStatus = Object.isExtensible(teacher);

// // Check if the teacher object is sealed
// const sealedStatus = Object.isSealed(teacher);

console.log('Extensible status:', extensibleStatus);
console.log('Sealed status:', sealedStatus);
