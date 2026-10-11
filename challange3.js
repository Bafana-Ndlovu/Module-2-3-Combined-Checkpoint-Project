/* 
1. Arithmetic (include modulo): Calculate a worker's monthly net salary from a gross salary of
R 45,000 after 25% tax, 1% UIF, and R 2,500 medical aid.
*/
// Monthly net salary after deductions.
let gross = 45000;
let tax = gross * 0.25;
let uif = gross * 0.01;
let medicalAid = 2500;
let netSalary = gross - tax - uif - medicalAid;
// realistic payroll calculation
console.log("Net Salary:", netSalary); 


/*
2. Assignment (at least 3 compound operators): A shopping cart starts at 0. Three items added
at R 150, R 85, R 220. Then 10% discount, then 15% VAT
*/
// Shopping cart calculation
let cartTotal = 0;
cartTotal += 150;   // add first item
cartTotal += 85;    // add second item
cartTotal += 220;   // add third item
cartTotal *= 0.9;   // apply 10% discount
cartTotal *= 1.15;  // add 15% VAT

console.log("Final Cart Total is:", cartTotal);

/* 3. Comparison: Validate a signup form. User must be at least 18, password must have at least 8
characters, confirmed email must exactly match typed email.*/
// Signup form validation
// Signup form validation
let age = 19;
let password = "mypassword";
let email = "bafanandlovu1984@gmail.com.com";
let confirmEmail = "bafanandlovu1984@gmail.com.com";

let isValid = (age >= 18) && (password.length >= 8) && (email === confirmEmail);
console.log("Form valid is:", isValid);

/*4 Logical: A user can access the premium dashboard IF (logged in AND email verified) OR
(they are an admin).*/
// Dashboard access
let loggedIn = true;
let emailVerified = false;
let isAdmin = true;

// The AND or OR
let canAccess = (loggedIn && emailVerified) || isAdmin;

console.log("Access is granted:", canAccess);