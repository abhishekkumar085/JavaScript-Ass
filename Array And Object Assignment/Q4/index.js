const students = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    grade: 'A',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    grade: 'B',
  },
  {
    id: 3,
    firstName: 'Bob',
    lastName: 'Johnson',
    age: 19,
    grade: 'A',
  },
  {
    id: 4,
    firstName: 'Jony',
    lastName: 'Dey',
    age: 10,
    grade: 'C',
  },
  {
    id: 5,
    firstName: 'Johns',
    lastName: 'Does',
    age: 25,
    grade: 'D',
  },
];

//a)  // Add a new Student to array

function addStudent() {
  const newStudent = {
    id: 6,
    firstName: 'Rahul',
    lastName: 'suresh',
    age: 20,
    grade: 'F',
  };
  students.push(newStudent);
  console.log(students, 'Adding student');
}
addStudent();

// b) // update based on id
function updateDataWithId(id) {
  return students.map((student) => {
    if (student.id === id) {
      return {
        id: student.id,
        firstName: 'rohan',
        lastName: 'turun',
        age: 20,
        grade: 'M',
      };
    }
    return student;
  });
}
const result = updateDataWithId(2);
console.log(result, 'Update with id');

//c)// Delete function by id
function deleteStudent(id) {
  return students.filter((student) => student.id !== id);
}

const result1 = deleteStudent(3);
console.log(result1, 'Delete by id');

// d ) find  student by grade
function findStudentByGrade(grade) {
  const filteredStudent = students.filter((student) => student.grade === grade);
  return filteredStudent;
}

const findData = findStudentByGrade('F');
console.log(findData, 'Student Found');

// e. Calculate the Average
function CalculateAverageAge() {
  const totalAge = students.reduce((accu, curr) => accu + curr.age, 0);
  const averageAge = totalAge / students.length;
  return averageAge;
}

const res = CalculateAverageAge();
console.log('Average Age is ', res);

// f. List All Students

function ListAllStudents() {
  students.forEach((student, index) => {
    console.log(student);
  });
}
ListAllStudents();

// --------------X-------------- The End -------------------X-------------------//

// function updateStudent(id, newData) {
//   return students.map((student) => {
//     if (student.id === id) {
//       return { ...student, ...newData }; // Merge the existing student data with the new data
//     }
//     return student; // Return the student itself for other students
//   });
// }

// const updatedStudents = updateStudent(2, { firstName: 'NewFirstName', lastName: 'NewLastName', age: 23, grade: 'A+' });
// console.log(updatedStudents);

// find student by grade

// function findStudentByGrade(grade) {
//   return students.map((student) => {
//     if (student.grade === grade) {
//       return {
//         id: student.id,
//         firstName: student.firstName,
//         lastName: student.lastName,
//         age: student.age,
//         grade: student.grade,
//       };
//     }
//     return;
//   });
// }

// const findData = findStudentByGrade('F');
// console.log(findData, 'find');
