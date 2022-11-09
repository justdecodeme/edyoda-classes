// console.log("Hi everyone!");

// var a = 10;
// let b = 20;

// console.log(a); // 10
// console.log(b); // 20

/* *********************** */
/* Differences between var, let and const */
/* *********************** */

/* let does not support Hoisting */

// console.log(a); // undefined (a is allocated memory due to hoisting)
// var a = 10;

// console.log(a); // ReferenceError: Cannot access 'a' before initialization (hoisting will not work for let)
// let a = 10;

/* let cannot create variable with same name */

// let a = 10;
// let a = 20;

/* let is block scoped */

// if (1 == 1) {
// 	var a = 10;
// }
// console.log(a); // 10

// if (1 == 1) {
// 	let a = 10;
// }
// console.log(a); // a is not defined

/* var is not block scoped but it is function scoped */

// function fn() {
// 	var a = 10;
// }
// console.log(a); // a is not defined

/* const is same like let but it's value can't be changed once assigned */

// const PI = 3.14;
// PI = 4; // TypeError: Assignment to constant variable

// let radius = 2;
// let areaOfCircle = PI * radius * radius;

// console.log(areaOfCircle);

/* *********************** */
/* Arrow functions */
/* *********************** */

/* normal function syntax */

// function fnName() {}

/* arrow function syntax */

// () => {}

/* calling normal function: method 1 */

// function fnName() {
//   console.log('Hi from normal function');
// }

// fnName();

/* calling normal function: method 2 */

// var fnName = function () {
//   console.log('Hi from normal function');
// }

// fnName();

/* calling arrow function */

// var fnName = () => {
//   console.log('Hi from arrow function');
// }

// fnName();

/* hoisting will work for normal function */

// fnName();

// function fnName() {
//   console.log('Hi from normal function');
// }

/* hoisting will not work for arrow function */

// fnName(); // TypeError: fnName is not a function

// var fnName = () => {
//   console.log('Hi from arrow function');
// }

/* passing values to normal function */

// function fnName(val1, val2) {
//   console.log(val1, val2);
// }

// fnName(10, 20);

/* passing values to arrow function */

// var fnName = (val1, val2) => {
//   console.log(val1, val2);
// }

// fnName(10, 20);

/* arrow function with only 1 parameter */

// var fnName = val1 => {
//   console.log(val1);
// }

// fnName(10);

/* arrow function with only 1 statement inside it */

// var fnName = val1 => console.log(val1);

// var fnName = (val1) => { // same as above
//   console.log(val1);
// }

// fnName(10);

/* *********************** */
/* Template literals / Template strings */
/* *********************** */

// var firstName = "John";
// var lastName = "Doe";

/* normal string */

// console.log("Fullname is " + firstName + " " + lastName + ".");

/* can't write normal string on multiple lines  */

// console.log("
// Fullname is " + firstName + " " + lastName + "." // SyntaxError: Invalid or unexpected token
// );

/* template string */

// console.log(`Fullname is ${firstName} ${lastName}`);

/* template string can be written on multiple lines */

// console.log(`
// Fullname is ${firstName} ${lastName}
// `);

/* template string supports expressions */

// var a = 10;
// var b = 20;

// console.log(`Sum of ${a} and ${b} is ${a + b}.`);

/* *********************** */
/* Primitive and Reference Types */
/* *********************** */

/* Primitive types > number, string, boolean */

// var a = 10;
// var b = a;
// a = 20;
// console.log(b); // 10

/* Reference types > array, objects */

// var arr1 = [10];
// var arr2 = arr1;
// // console.log(arr2); // [10]
// arr1[0] = 20;
// console.log(arr2); // [20]

/* *********************** */
/* Rest and Spread operators */
/* *********************** */

/* rest operator example */

// function fnName(...rest) {
//   console.log(...rest); //

//   // code
// }

// fnName(10, 20, 30, 40, 50, 60);

/* Rest parameter must be last formal parameter */

// function fnName(a, b, ...rest, c) { // SyntaxError: Rest parameter must be last formal parameter
//   console.log(a, b, rest, c);
// }

// fnName(10, 20, 30, 40, 50);

/* spread operator example */

// var arr = [10, 20, 30, 40, 50];
// console.log(arr);

// console.log(...arr);

/* spread operator is used to copy array */

// var arr1 = [10];
// var arr2 = arr1;
// arr1[0] = 20;
// console.log(arr2); // [20]

// var arr1 = [10, 20, 30];
// var arr2 = [...arr1];
// arr1[0] = 40;
// console.log(arr2); // [ 10, 20, 30 ], original value not changed as compared to below

// var arr1 = [10];
// var arr2 = arr1;
// arr1[0] = 100;
// console.log(arr2[0]);

/* spread operator is used to combine arrays */

// var arr1 = [10, 20, 30];
// var arr2 = [40, 50];
// var arr3 = [...arr1, ...arr2];
// console.log(arr3);
// var arr4 = [40, 50, 10, 20, 30];

// console.log(arr3, arr4);

/* *********************** */
/* destructuring */
/* *********************** */

/* old method of getting array values */

// var arr = [10, 20, 30];
// var val1 = arr[0];
// var val2 = arr[1];
// var val3 = arr[2];
// console.log(val1, val2, val3);

/* getting array values using destructuring */

// var arr = [10, 20, 30];
// var [val1, val2, val3] = arr;
// console.log(val1, val2, val3);

// var arr = [10, 20, 30];
// var [b, c] = [10, 20, 30];
// console.log(b, c); //

// 10 30 < CORRECT
// 10 20
// 20 30


/* old method of getting object values */

// var obj = {
//   name: "John",
//   age: 30
// }

// var personName = obj.name;
// console.log(personName); // 

/* getting object values using destructuring */

// var obj = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30
// }

var { firstName: fName, lastName } = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
console.log(fName, lastName); // John Doe

/* using alias in destructuring */

// var obj = {
//   name: "John Doe",
//   age: 30
// }

// var { name: personName } = obj;
// console.log(personName);