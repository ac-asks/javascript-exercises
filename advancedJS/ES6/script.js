// Lecture: let and const

/*

// ES5
var name5 = 'James Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5)

// ES6
const name6 = 'Jane Smith';
// let can mutate
let age6 = 23;
//name6 = 'Jane Miler'; // this causes an error
console.log(name6);
*/

// variables declared with var are function scoped (ES5)
// variables declared with let and const in ES6 are block-scoped
// example below

/*
// ES5
function driversLicense5(passedTest) {

    if(passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;

    }

    console.log(firstName + ' born in ' + yearOfBirth + ' can drive now.');
}

// ES6
function driversLicense6(passedTest) {

    if(passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;

    }

    console.log(firstName + ' born in ' + yearOfBirth + ' can drive now.');
}

driversLicense5(true); // works in ES5 as console log is in same function
driversLicense6(true); // gets error because first name is not defined
// variables are block scoped --> BLOCK IS THE CODE THAT IS WRAPPED BETWEEN THE CURLY BRACES HERE
// everytime you have an if statement or a for block, you are creating a new block

// IF you want to use it then you need to declare the variables outside
// For example
function driversLicense6(passedTest) {

    let firstName; // variable is now outside of the block
    const yearOfBirth = 1990;

    if(passedTest) {
        firstName = 'John';
        yearOfBirth = 1990;

    }

    console.log(firstName + ' born in ' + yearOfBirth + ' can drive now.');
}

// In ES6, you can't use a variable before it is declared unlike ES5
// This is because of the temporal dead zone. Variables are hoisted in the execution context
// and set to undefined in ES5 but not in ES6


// MORE PRACTICAL EXAMPLE

let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i); //THIS IS BLOCK SCOPED SO ITS A DIFF I
}

console.log(i); // this i variable is different to the i variable above
// due to block scope with let, it prints 23
// with var, it prints 5 because the variables are not block scoped
*/
/////////////////////////////////////
// Lecture: Blocks and IIFEs
/*
// ES6 BLOCK
{
    const a = 1;
    let b = 2;
    var c =3; // var works because not block-scoped

} // not accessible - block scoped

console.log(a + b);
console.log(c);

// ES5 IIFE

(function() {
    var c = 3;
})();

console.log(c);
*/

/////////////////
// Lecture: Strings


let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year
}

// ES5
console.log('This is ' + firstName + ' ' 
+ lastName + '. He was born in ' + yearOfBirth+ '. Today, he is' +
calcAge(yearOfBirth) + ' years old.');

// ES6 - write all text and put variables inside text
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}.
Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); // checks if string starts with j or not
console.log(n.endsWith('th'));
console.log(n.includes(' ')); // checks if string includes a space
console.log(firstName.repeat(5)); // repeats the string