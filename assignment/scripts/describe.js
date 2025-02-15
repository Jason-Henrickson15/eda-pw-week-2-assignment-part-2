// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we created a variable 'name' and assigned it the value of 'Dane'
// we created a conditional where if the name is Mary the console says 'Hi, Mary!'
// if name is not Mary the console will say 'how do you do?' instead since the name is different
// Since the name is not Mary the console will log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// first we create a variable called 'secret' and did not assign it a value
// we created a variable called 'code' and assigned it a value of '123'
// we created a conditional where if the code is '123' the value of secret will be assigned 'super' and
// and the value of code will be doubled
// we created another conditional where if the code is '250' the new value of 'secret' will be 'duper'
// lastly we console logged the value of 'secret'
// the first conditional will work and the value of code will be doubled
// the second conditional will not work since the value of the doubled code is not equal to 250
// since the second conditional did not fire, the variable 'secret' was never given a value so the console will log nothing

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We created a variable named 'isStudent' and gave it a boolean value of 'true'
// We created a variable named 'age' and gave it a value of 34
// We created a variable named 'zip' and gave it a value of 55407
// We created a compound if statement that states if 'isStudent' has a value of 'true' and the value of 'zip' is less than 80000,
// then the console will log 'You're a student on the West Coast!'
// If 'isStudent' has a value of 'false' and age is less than 30, then the console will log 'What are your hobbies?'
// If 'isStudent' has a value of 'true' the console will log 'Welcome to prime!'
// If none of these statements are correct then the console will log 'How about the weather?'
// In the first conditional, only the first statement is true so the console will log nothing
// In the second conditional, neither statements are true so the second conditional will do nothing
// In the third conditional, the statement is true so the console will log 'Welcome to prime!'
// Since there were conditionals that were true above the last else conditional will not be logged

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX - 'colorOne' should have the value of 'blue' and 'colorTwo' should have the value 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - 'colorOne' and 'colorTwo' should have their values set to 'purple'
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - '||' should be replaced with '&&' since it is a compound statement which means BOTH must be true
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*

// Fix - 'age' and 'minAge' are both supposed to be variables instead of constants
let age = 21;
const minAge = 21;

// Fix - the if statement should look like this if (age >= minAge) and the else statement should be one line down
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
