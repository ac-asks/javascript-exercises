///////////////////////////////////////
// Lecture: Hoisting

// calculateAge(1965); // It still works even though we have not defined the function yet
// This is hoisting ^
/****
 * In the creation phase of the execution context, which is, in this
 * case, the global execution context, the function declaration calculateAge is stored
 * in the variable object even before the code is executed
 * This is why when we enter the execution phase, the calculateAge
 * function is already available for us to use it
 * We do not need to declare function first then use it
 * This only works with FUNCTION DECLARATIONS
 */

// function calculateAge(year) {
//     console.log(2016 - year);
// }

// // retirement doesn't work because RETIREMENT IS NOT A FUNCTION DECLARATION
// // retirement is a function expression!
// //retirement(1990);


// // Lets see what happens with function expression
// var retirement = function(year) {
//     console.log(65 - (2016 - year));
// }

// // VARIABLE HOISTING
// console.log(age); // undefined!. Remember code is scanned for variable declarations then sets it to undefined
// var age = 23;
// //console.log(age);

// function foo() {
//     console.log(age); // this gives us undefined as code is scanned for
//     // variable declarations and sets it to undefined first since it is defined
//     // in this scopre below
//     var age = 65;
//     console.log(age);

// }
// foo();
// console.log(age);



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(c);
// }




///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

// calculateAge(1985);

// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    
    calculateAge: function() {
        console.log(this); // prints the john object
        console.log(2016 - this.yearOfBirth);
        
        /*
        // This is still a regular function and will no longer point
        // To the john function but will point to the window function
        function innerFunction() {
            console.log(this); // this returns the WINDOW
            // Reasonong: when a regular function call happens, the
            // default object is the window object
        }

        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// Method borrowing: borrow john's method to use it on mike
mike.calculateAge = john.calculateAge;
mike.calculateAge();








