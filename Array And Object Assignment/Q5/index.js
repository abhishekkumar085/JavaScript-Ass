const student = {
  name: 'Alice',
  age: 22,
  major: 'Computer Science',
  GPA: 3.8,
  isEnrolled: true,
};

function displayStudentInfo(student) {
  for (const property in student) {
    console.log(`Property: ${property} value: ${student[property]}`);
  }
}

displayStudentInfo(student);
