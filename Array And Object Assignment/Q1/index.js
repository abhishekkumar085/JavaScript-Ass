const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// Add Meat at the beginning
shoppingCart.unshift('Meat');
console.log(shoppingCart);

// Add Sugar At the end of the array
shoppingCart.push('Sugar');
console.log(shoppingCart);

// remove Honey if you are allergic to honey
const indexOfHoney = shoppingCart.indexOf('Honey');
console.log(indexOfHoney, 'index of Honey');
shoppingCart.splice(indexOfHoney, 1);
console.log(shoppingCart);

// Modify Tea to 'Green Tea'-

const indexOfTea = shoppingCart.indexOf('Tea');
console.log(indexOfTea, 'IndexOfTea');

shoppingCart.splice(indexOfTea, 1, 'GreenTea');
console.log(shoppingCart);
