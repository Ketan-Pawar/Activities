// Spliting String into an array
// var k = "one, two, three, four, five";
// console.log(k.split())

// Array method .join to join the string
// var k = "one, two, three, four, five";
// console.log(k.split(", ").join("~~"));

// var isString = function(value){
//     return typeof value === "string" || value instanceof string
// }
// var aString = "Primitive String";
// var aStringObj = new String("String Object");
// console.log(isString(aString)); // true
// console.log(isString(aStringObj)); // true
// console.log(isString({})); // false

// String Slicing
// var s = "0123456789abcdefg";
// console.log(s.slice(0, 5));
// console.log(s.slice(5, 6));

// Character Code
// var charCode = "µ".charCodeAt(); // The character code of the letter µ is 181
// var charCode = "ABCDE".charCodeAt(3); // The character code of "D" is 68

// String find and replace function
// var string = "Hello, World!";
// console.log( string.indexOf("o") );
// console.log( string.indexOf("foo") ); 

// var string = "Hello, World!";
// console.log( string.lastIndexOf("o") ); 
// console.log( string.lastIndexOf("foo") ); 

// To check existance of string we use include()
// var string = "Hello, World!";
// console.log( string.includes("Hello") ); // true
// console.log( string.includes("foo") ); // false

// Repalce the string using replace()
// var string = "Hello, World!";
// string = string.replace( "Hello", "Bye" );
// console.log( string ); // "Bye, World!"
// string = string.replace( /W.{3}d/g, "Universe" );
// console.log( string ); // "Bye, Universe!"

// var string = "heLlo, woRlD!";
// string = string.replace( /([a-zA-Z])([a-zA-Z]+)/g, function(match, g1, g2) {
//  return g1.toUpperCase() + g2.toLowerCase();
// });
// console.log( string ); // "Hello, World!"

//String to uppercase
// console.log('ketan'.toUpperCase());

//String to lowercase
// console.log('Ketan'.toLowerCase());

//Repeat a astring
// "abc".repeat(3); // Returns "abcabcabc"
// "abc".repeat(0); // Returns ""
// "abc".repeat(-1); // Throws a RangeError