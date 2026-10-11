/*
Part 1
*/

// 1. A string holding your full name
// Let keyword let myName change if need be at the later stage. 
// The myName Variable is a 'string type'
let myName = "Bafana";

// var is that variable that is declared inside the function and is only accessible there, it is not global.
// Variable is a "string"
if (true) {
    var functionS = "I am the function scope";
}

// 2. A number holding your age
// const keeps my variable to unchangeable at later stage
// Variable is a number type data structure
const age = 39;

// 3. A boolean holding whether you enjoy JavaScript so far.
// A boolean is simple True or False
let are_You_Enjoying_Javascript_So_Far = true;

// 4. A number with decimals holding your favorite temperature in degrees Celsius.
// Variable is float number.
let temperature = 28.4;
console.log(`${temperature}C`);

// 5. A variable holding NaN (create it using Number('not a number'))
// NAN is non numeric and it is not number
let isNAN = 20 / "error";
console.log(isNAN);  

// 6. A variable holding Infinity (using 1/0 or the Infinity keyword)
let infinity = 3 / 2;

// 7 A variable holding Number.MAX_SAFE_INTEGER
let number = 100;
let max = number * MAX_SAFE_INTEGER; 

// 8. A variable set explicitly to null
let userName = null;
console.log(userName);

// 9 A variable set explicitly to undefined
let user_Name = undefined; 
console.log(user_Name);

// 10 A template literal that uses at least two of the above variables
console.log(`${temperature} and ${age}`);

/*
Part B
*/

// typeof null
//Is null
console.log(typeof(userName));

// typeof NaN
// Is isNAN
console.log(typeof(isNAN));

//  typeof undefined
// IS UNDEFINED
console.log(typeof(user_Name));

// typeof "42"
let forty = "42";
console.log(typeof(forty));

// typeof (typeof 42)
// Unexpected number
let forty_Number = (typeOf 42);
console.log(typeOf(forty_Number));

// typeof [1, 2, 3]
let array = [1, 2, 3] ;
console.log(typeof(array));

// function() {}
let object = function() {} ;
console.log(typeof(object));