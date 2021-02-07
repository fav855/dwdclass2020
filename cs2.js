//switch
// the switch statements is used to perform different actions based on different conditions
// with the switch statements you can select one of many code blocks to be executed

//syntax
//switch(expression){
//case x:
        //code to run
    //break
// case y
        //code to run
    //break;
// default:
        //code to run

//}

//Example

let currentDay = new Date().getDay()
console.log(currentDay);

switch(currentDay){
    case 0:
        day = "Sunday"
        break;
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
        break;
    default:
         "No day selected"

}
document.getElementById('weekday').innerHTML ="Today is " + day;

// without the break statements the switch returns the last 

let text;

switch(currentDay){
    case 6:
        text = "Today is Saturday"
        break;
    case 1:
        text = "Today is Monday"
        break;
    case 0:
        text = "Today is Monday"
        break;
    default:
        text = "Looking forward to the weekend"

        //multiple cases can use the same code block
    case 4:
    case 5:
        text = "It will be weekend soon!"
        break;
}
console.log(text);
//specific days
let setDay = new Date().setFullYear(2021, 00, 28)
console.log(setDay)

switch(5){
    case 6:
        text = "Today is Saturday"
        break;
    case 1:
        text = "Today is Monday"
        break;
    case 0:
        text = "Today is Monday"
        break;
    default:
        text = "Looking forward to the weekend"

        //multiple cases can use the same code block
    case 4:
    case 5:
        text = "It will be weekend soon!"
        break;
}
console.log(text)

//Switch statements use strict (===) comparison

let x = "0";

switch(x){
    case 0:
        text = "Off";
    break;
    case 1: 
        text = "On";
    default:
        text = "No value found!"
}
console.log(text);


//Loops
//For loops
// we use loops to run the same code over and over again, each time with a different value

let i;
let cars = ['BMW', 'Audi', 'Lexus', 'Benz', 'Acura']

for(i = 0; i < cars.length; i++){
    text += '<br>' + cars[i] + '<br>';
}
document.getElementById('cars').innerHTML = text;

//Example

let colors =['red', 'green', 'purple', 'blue', 'yellow']
let j = 0
let len = colors.length
let msg = "";

for(; j < len; ){
    msg += 'The color name is ' + colors[j] + '<br>'
    j = j +2
}

document.getElementById('colors').innerHTML = msg;

//For/In Loop
// can be used to loop through props of an object

let txt = '';
let person = {fname:"Joy ", lname: "Bello ", age:23}
i = 0

for (i in person){
    txt += person[i] + "";
}
document.getElementById('person').innerHTML = txt;



/*function ClassData (firstname, eye, height, laptop){
    this.firstname = firstname;
    this.eye = eye;
    this.height = height;
    this.laptop = laptop;

    this.getClassData = function(){
        return this.rooms - this.booked;
    }
    console.log(ClassData(firstname, eye, height, laptop));*/

//for/Of Loop

// loop through an iterable object
let c;
for (c of colors){
    console.log(c)
}

//string
var name = "Javascript"
var n;

for (n of name){
    console.log(n)
}
//While loops
// runs through a block of code as long as a specified condition is true but when the condition is false, it stops.

//Example
var g = 0;
while(g < 10){
    text += "The number is " + g + '<br>'
    g++;
}
document.write(text)


//do/while

//do{
    //code goes here
//} while(condition)

var g = 1;

do{
    text += "the new number is" + g
    g++
}   while ( g < 20)
document.write(text)

//create number pad
var g = 0;
for(g = 1; g < 10; g++){

    document.getElementById('buttoncontainer').innerHTML += `<button  style="background-color:black; 
    padding:.5rem 1rem; color:white; margin:5px; border-color:white; border-width:2px; cursor:pointer;>${g}</button>`

    if(g % 3 == 0){
        document.getElementById('buttoncontainer').innerHTML += '<br>';
    }
}


