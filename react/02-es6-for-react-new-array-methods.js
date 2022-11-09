console.log("Hi everyone!");

var productsArr = [
  {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 548,
    "discountPercentage": 20.2,
    "rating": 8.25,
    "stock": 10,
  },
  {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 15,
    "rating": 7.6,
    "stock": 5,
  },
  {
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "discountPercentage": 8.15,
    "rating": 5.25,
    "stock": 20,
  },
  {
    "id": 4,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 280,
    "discountPercentage": 4.15,
    "rating": 4.25,
    "stock": 50,
  },
  {
    "id": 5,
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "discountPercentage": 10.15,
    "rating": 10.25,
    "stock": 60,

  },
  {
    "id": 6,
    "title": "MacBook Pro",
    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
    "price": 1749,
    "discountPercentage": 11.02,
    "rating": 4.57,
    "stock": 83,
  },
  {
    "id": 7,
    "title": "Samsung Galaxy Book",
    "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    "price": 1499,
    "discountPercentage": 4.15,
    "rating": 4.25,
    "stock": 50,
  },
  {
    "id": 8,
    "title": "Microsoft Surface Laptop 4",
    "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    "price": 1499,
    "discountPercentage": 10.23,
    "rating": 4.43,
    "stock": 68,
  },
  {
    "id": 9,
    "title": "Infinix INBOOK",
    "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    "price": 1099,
    "discountPercentage": 11.83,
    "rating": 4.54,
    "stock": 96,
  },
  {
    "id": 10,
    "title": "HP Pavilion 15-DK1056WM",
    "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    "price": 1099,
    "discountPercentage": 6.18,
    "rating": 4.43,
    "stock": 89,
  }
]

let langArr = [
  {
    key: 'html',
    value: 'Hypertext Markup Language'
  },
  {
    key: 'css',
    value: 'Cascading Style Sheets'
  },
  {
    key: 'js',
    value: 'Javascript'
  },
]


/* *********************** */
/* Array Functions - map, reduce, filter, find, findIndex */
/* *********************** */

/* 💪 Make a habit of using let and const instead of var */
// const vowels = ['a', 'e', 'i', 'o', 'u']; //

/* 💪 semicolon is optional */
// console.log(vowels)


/* ************ */
/* map > This method create new array by calling the provided function in every element */
/* ************ */

/* map syntax */

// var newArr = arrName.map((arrItem, arrIndex) => { // code })

/* map example - loopting through each item */

// langArr.map((item, i) => {
//   console.log(item, i) // i is optional
// })

/* ❓ can we make the above code more shorter? */

/* map example - create new array of keys from langArr */

// var langKeys = langArr.map((item) => {
//   return item.key
// })

// console.log(langKeys)

/* ❓ map array function can be used in place of `for` and `foreach` loop? */


/* ************ */
/* filter > This method creates a new array with elements that pass the given condition */
/* ************ */

// let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8]

// let evenNumbersArr = numbersArr.filter((item, i) => {
//   if (item % 2 == 0) {
//     return item
//   }
// })

/* ❓ can we make the above code more shorter? */

// console.log(evenNumbersArr)

/* ❓ can we print oddNumbersArr? */


/* ************ */
/* find > This method filter elements through the function, return first value that make it return true */
/* ************ */

// let result = langArr.find((item) => {
//     return item.key === 'html'
// })

/* ❓ can we make the above code more shorter? */

// console.log(result)


/* ************ */
/* findIndex > This method returns the index of the first element of the given array that satisfies the given condition */
/* ************ */

// let index = langArr.findIndex((item) => {
//     return item.key === 'css'
// })

/* ❓ can we make the above code more shorter? */
/* ❓ what will the output if we write `item.key === 'php'` in the above code? */

// console.log(index)

/* ************ */
/* reduce > This method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value */
/* ************ */

// let numbersArr = [1, 2, 3, 4]

// let sum = numbersArr.reduce((acc, item) => {
//   return acc + item
// }, 0)

/* ❓ find the total price of all products? */
/* ❓ can you visulize how much it is difficult without using reduce array function? */

// console.log(sum)


/* *********************** */
/* Installing React.js */
/* *********************** */
/* 
1. https://code.visualstudio.com/
2. https://nodejs.org/en/
    node -v
    npm -v
3. https://reactjs.org/docs/create-a-new-react-app.html
*/