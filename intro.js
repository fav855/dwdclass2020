/*alert('Hello'); 
alert('Favour');
alert(
    4 +
    5
    + 7
)*/
//Variables: is a name storage for data
var x ;
let message ;
//assign values to variables using the assignment operator =
x = 20;
message = "Hello World!";
// create a variable and assign a value to it
//let username = 'John';

//declare multiple variables on one line
let user = 'favour', age = 22; //message = "Hello";

message ="James"

var x = 12;

console.log(message)

//notes when naming variables
// variable names can contain letters, digits or $ and_
// they cannot start with digits
// WRONG -> var 34name = "john"
// hyphens are not allowed -> var my-name = "Favour"

var $joe = "Welcome";
var _joe = "Welcome";

var Apple = 'favourite'; // not the same as
var apple = 'stale';
// reserved words, keywords
//var return class let function
    


//Js is written in CamelCase
firstName = "John"
lastName = "Doe"
job = "developer"

//constants
const name = "Jade";


console.log(name)

//using constatnts to store difficult to remember values
const API_KEY = "hnnhhiuiuiwoooooooo"
const COLOR_RED = "#F00"
const COLOR_ORANGE = "#FF7F00"

document.querySelector("div").style.backgroundColor = COLOR_ORANGE;

//  QUIZ
//1. Declare two variables admin and username
//2. Assign the value of your name to username
//3. Copy the value of username to admin
//4. Show the value of admin on alert (it must alert your name)

//  Answer
/*var admin;
var username;

username = "Favour";
admin = username;

alert(admin);*/

//JAVASCRIPT DATA TYPES
//PRIMITIVE DATA TYPES
//STRING, NUMBER, BIGINT, BOOLEAN(TRUE, FALSE)
//NULL, UNDEFINED

//COMPLEX DATA TYPE
//OBJECT

//NUMBER
let n = 12345;//whole number
n = 3.142; // decimal number
console.log(typeof(n));

//infinity
//alert(1/0)
//alert(infinity)

//NaN
//alert("name"/ 2)

//BIGINT
//refers to numbers larger than (2 * 10^53)
const bigInt = 123456789012345678901234567890123456789n;
console.log(typeof(bigInt))

//STRING
var house = "lekki"
var office = "ikeja"
var address = "27 awolowo way, ikeja"
var text = 'this is the boy\'s book'
var text2 = "this is the boy's book"
var phrase = `can embed another string like ${n}` //backtick
console.log(phrase)

var myName = "Favour";
//alert(`Hello, ${myName}!`)

//alert(`the result is ${1 + 4}`)

//BOOLEAN (Logical type)
// true or false

let isNameChecked = true;


let isGreater = 1 > 4; //1> 4 < 2 true, evaluates the number in the middle and skips to the next
    isGreater = 5==6;
//alert (isGreater)
console.log(typeof(isNameChecked))

//NULL Value

age = null;
console.log(typeof(age))

//UNDEFINED

var xy;
console.log(typeof(xy))

//OBJECT
//Array
let numbers = [1,2,3,4,5]

console.log(typeof(numbers))

//Object
//key value 
let person = {firstName: "John", lastName:"Doe", age: "50"}
console.log(typeof(person))
console.log(person)

//Built in Objects
//e.g Math

console.log(typeof(Math));

//let test = prompt("test");
//console.log(test);

//let age = prompt("How old are you");
//alert(`You are ${age} years old`) 

//let newAge = prompt("How old are you ");
//alert(`You are ${newAge} years old`) 

//let isBoss = confirm("Are you the Boss?");
//alert(isBoss)


//Interacting with users
//alert - shows a message

//Prompt shows the message asking a user to input text
// Returns the text or null

//confirm - shows a message and waits for the user to 
//press ok - true or cancel/Esc - false

//QUIZ
//Create a simple page
//Ask the user for a name and output it.

let userName = prompt("Input Username:");
console.log(userName);
document.getElementById('title').innerHTML =`Welcome ${userName}`;



