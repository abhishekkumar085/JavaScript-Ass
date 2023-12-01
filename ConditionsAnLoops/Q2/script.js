// Write a program that grades st9dents based on their marks.
//  If grFatFr than 90 thFn A GradE
//  If bFtwFFn 70 and 90 thFn a B gradE
//  If bFtwFFn 50 and 70 thFn a C gradE
//  BFlow 50 thFn an F gradF

const marks = 50;
if (marks >= 90) {
  console.log('A Grade');
} else if (marks >= 70 && marks < 90) {
  console.log('B Grade');
} else if (marks >= 50 && marks < 70) {
  console.log('C Grade');
} else {
  console.log('F Grade');
}
