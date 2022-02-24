// console.log("Hello World!")

// var foo = '8'
// console.log(foo)

// var thisvar = '7';
// var thatvar = '8';
// console.log("Thisvar: ",thisvar,"Thatvar: ",thatvar);

// Info: console.log() in combination with placeholders
// var greet = "Hello", who = "Ketan";
// console.log("%s, %s!", greet, who);


// Info: result of logging an object. This is often useful for logging JSON responses from API calls.
// console.log({
//     'email':"",
//     'Groups': {},
//     'id':33,
//     'IsHiddenInUI':false,
//     'PrincipalType': 1,
//     'Title': 'user2'
// });

// Info: Using the DOM API
// Info: textContent property of an Element is one way to output text on a web page. To change its textContent property, we can run the following JavaScript:
// document.getElementById("paragraph").textContent = "Hello World!";
// var element = document.createElement(p);
// element.textContent = "Hello World!";
// document.body.appendChild(element)

// To alert user. The alert method displays a visual alert box on screen. 
// alert("Are you sure you want to this tab")

// Info: To get an input from a user is by using the prompt() method.
// var age = prompt("How old are you?")
// console.log(age)

// Info: The window.confirm() method displays a modal dialog with an optional message and two buttons, OK and Cancel
// if(window.confirm("Are you sure to do so?")){
// }
// Info: If we need it for later use, you can simply store the result of the user's interaction in a variable
// var confirmOn = window.confirm("Are you sure to do so?")

// Info: Using the DOM API (with graphical text: Canvas
// var canvas = document.createElement('canvas');
// canvas.width = 500;
// canvas.height = 250;
// var ctx = canvas.getContext('2d');
// ctx.font = '30px Cursive';
// ctx.fillText("Hello world!", 50, 50);
// document.body.appendChild(canvas);

// SVG is for building scalable vector-based graphics and can be used within HTML
// var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
// svg.width = 500;
// svg.height = 50;
// var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
// text.setAttribute('x', '0');
// text.setAttribute('y', '50');
// text.style.fontFamily = 'Times New Roman';
// text.style.fontSize = '50';
// text.textContent = 'Hello world!'
// svg.appendChild(text);
// document.body.appendChild(svg);

// Adding image file
// var img = new Image();
// img.src = 'K:\Searce\ProjectsAtSearce\PracticeJavascript\searce logo.png';
// document.body.appendChild(img);


// Variables In Javascript

// var number1 = 5;
// number1 = 3;
// console.log(number1);


// number1 = number1 + 5;
// console.log(number1)
// number1 = number1 - 6;
// console.log(number1)
// var number2 = number1 * 10;
// console.log(number2)
// var number3 = number2 / number1;
// console.log(number3)

// Concatenating string
// var myString = "I am a " + "string!"; 
// console.log(myString)

// // Types of variables in Javascript
// var myInteger = 12;
// var myLong = 9310141419482;
// var myFloat = 5.5; 
// var myDouble = 9310141419482.22; 
// var myBoolean = true; 
// var myBoolean2 = false;
// var myNotANumber = NaN;
// var NaN_Example = 0/0; 
// var notDefined;


// Array In Javascript
// var myArray = []; // empty array
// console.log(myArray)

// var favoriteFruits = ["apple", "orange", "strawberry"];
// console.log(favoriteFruits)
// var carsInParkingLot = ["Toyota", "Ferrari", "Lexus"];
// console.log(carsInParkingLot)
// var employees = ["Billy", "Bob", "Joe"];
// console.log(employees)
// var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
// console.log(employees)
// var randomVariables = [2, "any type works", undefined, null, true, 2.51];
// console.log(randomVariables)

// Checking Index of an element
// myArray = [1,3,6,7,'searce', 'pune']
// console.log(myArray.indexOf('pune'))
// console.log(myArray[3])
