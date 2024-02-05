// create a outerfunction
function outerFunction(outer) {
  const x = 10;
  function innerFunction() {
    console.log(x);
    console.log(outer)
  }
 return innerFunction
}
const y=outerFunction("hello");
console.log(y)

y();