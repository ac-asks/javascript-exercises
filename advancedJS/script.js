// FUNCTION CONSTRUCTOR METHOD
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};


// calculate age is in the prototype property of our function
// constructor
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Attaching methods to the constructor functions
// prototype property is something really commonly used
Person.prototype.calculateAge = 
function() {
    console.log(2016 - this.yearOfBirth);
}

// We can also do this for properties
Person.prototype.lastName = 'Smith';

var john = new  Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// OBJECT.CREATE METHOD

/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
*/


// Primitives
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
};


// Objects
var obj2 = obj1;
obj1.age = 30; // same object
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/

///////////
// Lecture: Passing functions as arguments

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length;  i++) {
        arrRes.push(fn(arr[i])); //push element onto end of array
    }

    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);// callback function where it is called later
var fullAges = arrayCalc(ages, isFullAge)
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/

///////////
// Lecture: Functions returning functions

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) { // if job is designer, we can return a function
            console.log(name + ', can you please explain what UX design is?')
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach , '+ name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John'); // returns function that accepts name as the input

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');

interviewQuestion('teacher')('Mark'); // returns a function and you don't even need to call it, can just use more brackets again


// My example!
function favouriteFood(food) {
    if (food === 'carrots') {
        return function(cookingStyle) {
            console.log('I see you like your ' + food + cookingStyle);
        }
    } else if (food === 'potatoes') {
        return function(cookingStyle) {
            console.log('I see you like your ' + food + cookingStyle);
        }
    } else {
        return function(cookingStyle) {
            console.log('Do you like your food ' + cookingStyle);
        }
    }
}

var foodQuestion = favouriteFood('potatoes');
foodQuestion(' boiled');
var carrotQuestion = favouriteFood('carrots');
carrotQuestion(' chopped');

*/

//////// 
// Lecture: IIFE

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// //console.log(score); // can't see the score outside of the IIFE

// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

//////////////
//Lecture: Closures

// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66); // returns function where retirement age is 66
// retirementUS(1990);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementUS(1990);
// retirementIceland(1990);


//retirement(66)(1990); // same result as above

/*
// rewriting interviewQuestion function using closures

function interviewQuestion(job) {

    return function(name) {

        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach , '+ name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('designer')('John');
interviewQuestion('teacher')('Mark');
*/

//////////////
// Lecture: Bind, call and apply

/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name +
        ', I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name +
            ', I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon'); // uses the method on emily instead by setting the this to emily instead
// ^ this is called method borrowing

// The apply method accepts the arguments as an array
// john.presentation.apply(emily, ['friendly', 'afternoon']);

// bind also allows us to set this variable explicitly. but bind does not immediatley call the function but generates
// copy fo the function so we can store it somewhere --> can create function with preset arguments

var johnFriendly = john.presentation.bind(john, 'friendly'); // function always for
// friendly version of presentation method

johnFriendly('morning'); // only 1 argument left to be set so we can set it like so
johnFriendly('night'); // THIS IS CALLED CARRYING --> create function based on another function with some preset parametrs

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

// CALL, APPLY AND BIND
*/

var score = 0;

(function() { // new scope where we define all of this. If someone includes this code in their project and also has
    // same variables, then that code won't interfere with our code


    // constructor for questions
    function gameQuestion(question, answers, correctAnswer) {

        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;

    }

    gameQuestion.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
        console.log('==================')
    }



    gameQuestion.prototype.checkAns = function(answer, callback) {

        if (answer === this.correctAnswer) {

            var sc;

            score += 1;
            console.log('You got the correct answer.');
            sc = callback(true);
        } else {
            console.log('Incorrect answer!');
            sc = callback(false);
        }

        this.displayScore(sc);

    }



    // Using closure for score
    function score() {
        var sc = 0;
        return function(correct) { // function increases the score if the answer is correct and then returns it
            if(correct) {
                sc++;
            }
            return sc; // either way, return the score
        }
    }

    var keepScore = score(); // score the function call in a variable

    // Method for displaying score in console
    gameQuestion.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('-----------------')
    }


    // questions stored into an array
    var question1 = new gameQuestion('In what year did Australia become a Federation?',
        ['1901', '1902'], '0'
    );

    var question2 = new gameQuestion('Who was the first Australian PM?', 
    ['Edmund Barton', 'Donald Trump'], '0'
    );

    var question3 = new gameQuestion('What is the most landlocked country in the world?', 
    ['Turkey', 'Kazhakstan'], '1'
    );

    var questions = [question1, question2, question3]; // store all questions into array

    // Chooses questions at random to ask
    function askQuestions() {

        var Qnumber = Math.floor(Math.random() * 3); // choose random number
        questions[Qnumber].displayQuestion(); // display the question

        var ans = prompt('Please enter an answer: ');

        if (ans != 'exit') { // continues until player types quit

            console.log(questions[Qnumber].correctAnswer);
            questions[Qnumber].checkAns(ans, keepScore); // pass the closure that keeps track of the score
        } else {
            console.log('You have quit the quiz');
            return; 
        }

        askQuestions();

    }

    askQuestions();

})();


